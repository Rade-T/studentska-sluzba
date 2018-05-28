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

import eObrazovanje.aplikacija.dto.PredavanjeDTO;
import eObrazovanje.aplikacija.model.Predavanje;
import eObrazovanje.aplikacija.service.PredavanjeService;


@RestController
@RequestMapping(value="/api/predavanje")
public class PredavanjeController {
	
	@Autowired
	private PredavanjeService predavanjeService;
	
	@GetMapping
	public @ResponseBody
    List<PredavanjeDTO> readAll(){
		List<Predavanje> predavanja = (List<Predavanje>) predavanjeService.findAll();
		List<PredavanjeDTO> predavanjaDTO = new ArrayList<>();
		for (Predavanje pr : predavanja){
			predavanjaDTO.add(new PredavanjeDTO(pr));
		}
		return predavanjaDTO;		
	}
	
	@GetMapping("/{id}")
	public @ResponseBody
    PredavanjeDTO readOne(@PathVariable(value="id")Integer id){
		Predavanje pr = predavanjeService.findOne(id);
		return new PredavanjeDTO(pr);
	}
	
	@PostMapping
	public @ResponseBody
    PredavanjeDTO create (@RequestBody PredavanjeDTO dto){
		Predavanje pr = new Predavanje();
		pr.setId(dto.getId());
		predavanjeService.save(pr);
		
		return new PredavanjeDTO(pr);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody
    PredavanjeDTO update(@PathVariable(value="id") Integer id, @RequestBody PredavanjeDTO dto){
		Predavanje pr = predavanjeService.findOne(id);
		pr.setId(dto.getId());
		predavanjeService.save(pr);
		
		return new PredavanjeDTO(pr);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody
    PredavanjeDTO delete(@PathVariable(value="id")Integer id){
		Predavanje pr = predavanjeService.findOne(id);
		predavanjeService.remove(pr);;
		
		return new PredavanjeDTO(pr);
	}

}
