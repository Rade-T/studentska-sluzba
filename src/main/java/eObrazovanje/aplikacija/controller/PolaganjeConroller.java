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

import eObrazovanje.aplikacija.dto.PolaganjeDTO;
import eObrazovanje.aplikacija.model.Polaganje;
import eObrazovanje.aplikacija.repository.PolaganjeRepository;

@RestController
@RequestMapping(value="/api/polaganje")
public class PolaganjeConroller {
	
	@Autowired
	private PolaganjeRepository pRepo;
	private ModelMapper mapper = new ModelMapper();
	
	@GetMapping
	public @ResponseBody List<PolaganjeDTO> readAll(){
		List<Polaganje> polaganje= (List<Polaganje>) pRepo.findAll();
		List<PolaganjeDTO> polaganjeDTO = new ArrayList<>();
		for (Polaganje p : polaganje){
			polaganjeDTO.add(mapper.map(p, PolaganjeDTO.class));
		}
		return polaganjeDTO;		
	}
	
	@GetMapping("/{id}")
	public @ResponseBody PolaganjeDTO readOne(@PathVariable(value="id")Integer id){
		Polaganje p = pRepo.findById(id).get();
		return mapper.map(p, PolaganjeDTO.class);
	}
	
	@PostMapping
	public @ResponseBody PolaganjeDTO create (@RequestBody PolaganjeDTO dto){
		Polaganje p = new Polaganje();
		p.setId(dto.getId());
		pRepo.save(p);
		
		return mapper.map(p, PolaganjeDTO.class);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody PolaganjeDTO update(@PathVariable(value="id") Integer id, @RequestBody PolaganjeDTO dto){
		Polaganje p = pRepo.findById(id).get();
		p.setId(dto.getId());
		pRepo.save(p);
		
		return mapper.map(p, PolaganjeDTO.class);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody PolaganjeDTO delete(@PathVariable(value="id")Integer id){
		Polaganje p = pRepo.findById(id).get();
		pRepo.delete(p);;
		
		return mapper.map(p, PolaganjeDTO.class);
	}
	

}
