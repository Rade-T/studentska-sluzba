package eObrazovanje.aplikacija.controller;

import java.awt.List;
import java.util.ArrayList;

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


import eObrazovanje.aplikacija.dto.UcenikDTO;
import eObrazovanje.aplikacija.model.Ucenik;
import eObrazovanje.aplikacija.repository.UcenikRepository;



@RestController
@RequestMapping(value="/api/ucenik")
public class UcenikController {
/*	
	@Autowired
	private UcenikRepository URepo;
	private ModelMapper mapper = new ModelMapper();
	
	@GetMapping
	public @ResponseBody List<UcenikDTO> readAll(){
		List<Ucenik> nastavnici = (List<Ucenik>) URepo.findAll();
		List<UcenikDTO> UcenikDTO = new ArrayList<>();
		for (Ucenik n : nastavnici){
			UcenikDTO.add(mapper.map(n, UcenikDTO.class));
		}
		return UcenikDTO;		
	}
	
	@GetMapping("/{id}")
	public @ResponseBody UcenikDTO readOne(@PathVariable(value="id")Integer id){
		Ucenik u = URepo.findById(id).get();
		return mapper.map(u, UcenikDTO.class);
	}
	
	@PostMapping
	public @ResponseBody UcenikDTO create (@RequestBody UcenikDTO dto){
		Ucenik u = new Ucenik();
		u.setDokumenti(dto.getDokumenti());
		u.setUplate(dto.getUplate());
		URepo.save(u);
		
		return mapper.map(n, UcenikDTO.class);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody UcenikDTO update(@PathVariable(value="brojIndeksa") Integer id, @RequestBody UcenikDTO dto){
		Ucenik n = URepo.findById(id).get();
		n.setId(dto.getId());
		URepo.save(n);
		
		return mapper.map(n, UcenikDTO.class);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody UcenikDTO delete(@PathVariable(value="brojIndeksa")Integer id){
		Ucenik n = URepo.findById(id).get();
		URepo.delete(n);;
		
		return mapper.map(n, UcenikDTO.class);
	}
	
*/
}
