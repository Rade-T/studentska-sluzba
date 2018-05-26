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

import eObrazovanje.aplikacija.dto.NastavnikDTO;
import eObrazovanje.aplikacija.model.Nastavnik;
import eObrazovanje.aplikacija.repository.NastavnikRepository;



@RestController
@RequestMapping(value="/api/nastavnik")
public class NastavnikController {

	@Autowired
	private NastavnikRepository NRepo;
	
	@GetMapping
	public @ResponseBody
    List<NastavnikDTO> readAll(){
		List<Nastavnik> nastavnici = (List<Nastavnik>) NRepo.findAll();
		List<NastavnikDTO> nastavnikDTO = new ArrayList<>();
		for (Nastavnik n : nastavnici){
			nastavnikDTO.add(new NastavnikDTO(n));
		}
		return nastavnikDTO;		
	}
	
	@GetMapping("/{id}")
	public @ResponseBody
    NastavnikDTO readOne(@PathVariable(value="id")Integer id){
		Nastavnik n = NRepo.findById(id).get();
		return new NastavnikDTO(n);
	}
	
	@PostMapping
	public @ResponseBody
    NastavnikDTO create (@RequestBody NastavnikDTO dto){
		Nastavnik n = new Nastavnik();
		n.setId(dto.getId());
		NRepo.save(n);
		
		return new NastavnikDTO(n);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody
    NastavnikDTO update(@PathVariable(value="id") Integer id, @RequestBody NastavnikDTO dto){
		Nastavnik n = NRepo.findById(id).get();
		n.setId(dto.getId());
		NRepo.save(n);
		
		return new NastavnikDTO(n);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody
    NastavnikDTO delete(@PathVariable(value="id")Integer id){
		Nastavnik n = NRepo.findById(id).get();
		NRepo.delete(n);
		
		return new NastavnikDTO(n);
	}
}
