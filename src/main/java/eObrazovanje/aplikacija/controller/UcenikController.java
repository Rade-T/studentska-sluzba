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

import eObrazovanje.aplikacija.dto.UcenikDTO;
import eObrazovanje.aplikacija.model.Ucenik;
import eObrazovanje.aplikacija.repository.UcenikRepository;

@RestController
@RequestMapping(value="/api/ucenik")
public class UcenikController {
	
	@Autowired
	private UcenikRepository URepo;
	
	@GetMapping
	public @ResponseBody
    List<UcenikDTO> readAll(){
		List<Ucenik> ucenik = (List<Ucenik>) URepo.findAll();
		List<UcenikDTO> ucenikDTO= new ArrayList<>();
		for (Ucenik u : ucenik){
			ucenikDTO.add(new UcenikDTO(u));
		}
		return ucenikDTO;		
	}
	
	@GetMapping("/{id}")
	public @ResponseBody
	UcenikDTO readOne(@PathVariable(value="id")Integer id){
		Ucenik u = URepo.findById(id).get();
		return new UcenikDTO(u);
	}
	
	@PostMapping
	public @ResponseBody
	UcenikDTO create (@RequestBody UcenikDTO dto){
		Ucenik u = new Ucenik();
		u.setId(dto.getId());
		URepo.save(u);
		
		return new UcenikDTO(u);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody
    UcenikDTO update(@PathVariable(value="id") Integer id, @RequestBody UcenikDTO dto){
		Ucenik u = URepo.findById(id).get();
		u.setId(dto.getId());
		URepo.save(u);
		
		return new UcenikDTO(u);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody
	UcenikDTO delete(@PathVariable(value="id")Integer id){
		Ucenik u = URepo.findById(id).get();
		URepo.delete(u);
		
		return new UcenikDTO(u);
	}
}