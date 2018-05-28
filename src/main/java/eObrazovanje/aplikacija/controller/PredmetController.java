package eObrazovanje.aplikacija.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import eObrazovanje.aplikacija.dto.PredmetDTO;
import eObrazovanje.aplikacija.model.Predmet;
import eObrazovanje.aplikacija.service.PredmetService;


@RestController
@RequestMapping(value="/api/predmet")
public class PredmetController {
	
	@Autowired
	private PredmetService predmetService;
	
	@GetMapping
	public @ResponseBody
    List<PredmetDTO> readAll(){
		List<Predmet> predmeti = (List<Predmet>) predmetService.findAll();
		List<PredmetDTO> predmetiDTO = new ArrayList<>();
		for (Predmet p : predmeti){
			predmetiDTO.add(new PredmetDTO(p));
		}
		return predmetiDTO;
	} 
	
	@GetMapping("/{id}")
	public @ResponseBody
    PredmetDTO readOne(@PathVariable(value="id")Integer id){
		Predmet p = predmetService.findOne(id);
		return new PredmetDTO(p);
	}
	
	@PostMapping
	public @ResponseBody
    PredmetDTO create (@RequestBody PredmetDTO dto){
		Predmet p = new Predmet();
		p.setNaziv(dto.getNaziv());
		predmetService.save(p);
		
		return new PredmetDTO(p);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody
    PredmetDTO update(@PathVariable(value="id") Integer id, @RequestBody PredmetDTO dto){
		Predmet p = predmetService.findOne(id);
		p.setNaziv(dto.getNaziv());
		predmetService.save(p);
		
		return new PredmetDTO(p);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody
    PredmetDTO delete(@PathVariable(value="id")Integer id){
		Predmet p = predmetService.findOne(id);
		predmetService.remove(p);
		
		return new PredmetDTO(p);
	}
	
	

}
