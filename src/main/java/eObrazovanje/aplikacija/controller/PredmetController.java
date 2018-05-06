package eObrazovanje.aplikacija.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.catalina.mapper.Mapper;
import org.modelmapper.ModelMapper;
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
import eObrazovanje.aplikacija.repository.PredmetRepository;

@RestController
@RequestMapping(value="/api/predmet")
public class PredmetController {
	
	@Autowired
	private PredmetRepository PRepo;
	
	private ModelMapper mapper = new ModelMapper();
	
	@GetMapping
	public @ResponseBody List<PredmetDTO> readAll(){
		List<Predmet> predmeti = (List<Predmet>) PRepo.findAll();
		List<PredmetDTO> predmetiDTO = new ArrayList<>();
		for (Predmet p : predmeti){
			predmetiDTO.add(mapper.map(p, PredmetDTO.class));
		}
		return predmetiDTO;
	} 
	
	@GetMapping("/{id}")
	public @ResponseBody PredmetDTO readOne(@PathVariable(value="id")Integer id){
		Predmet p = PRepo.findById(id).get();
		return mapper.map(p, PredmetDTO.class);
	}
	
	@PostMapping
	public @ResponseBody PredmetDTO create (@RequestBody PredmetDTO dto){
		Predmet p = new Predmet();
		p.setNaziv(dto.getNaziv());
		PRepo.save(p);
		
		return mapper.map(p, PredmetDTO.class);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody PredmetDTO update(@PathVariable(value="id") Integer id, @RequestBody PredmetDTO dto){
		Predmet p = PRepo.findById(id).get();
		p.setNaziv(dto.getNaziv());
		PRepo.save(p);
		
		return mapper.map(p, PredmetDTO.class);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody PredmetDTO delete(@PathVariable(value="id")Integer id){
		Predmet p = PRepo.findById(id).get();
		PRepo.delete(p);
		
		return mapper.map(p, PredmetDTO.class);
	}
	
	

}
