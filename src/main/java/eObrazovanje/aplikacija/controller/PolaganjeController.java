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

import eObrazovanje.aplikacija.dto.PolaganjeDTO;
import eObrazovanje.aplikacija.model.Polaganje;
import eObrazovanje.aplikacija.repository.PolaganjeRepository;


@RestController
@RequestMapping(value="/api/polaganje")
public class PolaganjeController {
	
	@Autowired
	private PolaganjeRepository pRepo;
	
	@GetMapping
	public @ResponseBody
    List<PolaganjeDTO> readAll(){
		List<Polaganje> polaganje= (List<Polaganje>) pRepo.findAll();
		List<PolaganjeDTO> polaganjeDTO = new ArrayList<>();
		for (Polaganje p : polaganje){
			polaganjeDTO.add(new PolaganjeDTO(p));
		}
		return polaganjeDTO;		
	}
	
	@GetMapping("/{id}")
	public @ResponseBody
    PolaganjeDTO readOne(@PathVariable(value="id")Integer id){
		Polaganje p = pRepo.findById(id).get();
		return new PolaganjeDTO(p);
	}
	
	@PostMapping
	public @ResponseBody
    PolaganjeDTO create (@RequestBody PolaganjeDTO dto){
		Polaganje p = new Polaganje();
		p.setId(dto.getId());
		pRepo.save(p);
		
		return new PolaganjeDTO(p);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody
    PolaganjeDTO update(@PathVariable(value="id") Integer id, @RequestBody PolaganjeDTO dto){
		Polaganje p = pRepo.findById(id).get();
		p.setId(dto.getId());
		pRepo.save(p);
		
		return new PolaganjeDTO(p);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody
    PolaganjeDTO delete(@PathVariable(value="id")Integer id){
		Polaganje p = pRepo.findById(id).get();
		pRepo.delete(p);
		
		return new PolaganjeDTO(p);
	}
	

}
