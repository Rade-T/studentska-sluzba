package eObrazovanje.aplikacija.controller;

import java.util.ArrayList;
import java.util.List;

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

import eObrazovanje.aplikacija.dto.NastavnikDTO;
import eObrazovanje.aplikacija.dto.PohadjanjeDTO;
import eObrazovanje.aplikacija.model.Nastavnik;
import eObrazovanje.aplikacija.model.Pohadjanje;
import eObrazovanje.aplikacija.repository.PohadjanjeInterface;

@RestController
@RequestMapping(value="/api/pohadjanje")
public class PohadjanjeController {
	
	@Autowired
	private PohadjanjeInterface pRepo;
	private ModelMapper mapper = new ModelMapper();
	
	@GetMapping
	public @ResponseBody List<PohadjanjeDTO> readAll(){
		List<Pohadjanje> pohadjanje = (List<Pohadjanje>) pRepo.findAll();
		List<PohadjanjeDTO> pohadjanjeDTO = new ArrayList<>();
		for (Pohadjanje p : pohadjanje){
			pohadjanjeDTO.add(mapper.map(p, PohadjanjeDTO.class));
		}
		return pohadjanjeDTO;		
	}
	
	@GetMapping("/{id}")
	public @ResponseBody PohadjanjeDTO readOne(@PathVariable(value="id")Integer id){
		Pohadjanje p = pRepo.findById(id).get();
		return mapper.map(p, PohadjanjeDTO.class);
	}
	
	@PostMapping
	public @ResponseBody PohadjanjeDTO create (@RequestBody PohadjanjeDTO dto){
		Pohadjanje p = new Pohadjanje();
		p.setId(dto.getId());
		pRepo.save(p);
		
		return mapper.map(p, PohadjanjeDTO.class);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody PohadjanjeDTO update(@PathVariable(value="id") Integer id, @RequestBody PohadjanjeDTO dto){
		Pohadjanje p = pRepo.findById(id).get();
		p.setId(dto.getId());
		pRepo.save(p);
		
		return mapper.map(p, PohadjanjeDTO.class);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody PohadjanjeDTO delete(@PathVariable(value="id")Integer id){
		Pohadjanje p = pRepo.findById(id).get();
		pRepo.delete(p);;
		
		return mapper.map(p, PohadjanjeDTO.class);
	}
}
