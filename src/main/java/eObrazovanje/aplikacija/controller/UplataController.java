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

import eObrazovanje.aplikacija.dto.PohadjanjeDTO;
import eObrazovanje.aplikacija.dto.UplataDTO;
import eObrazovanje.aplikacija.model.Pohadjanje;
import eObrazovanje.aplikacija.model.Uplata;
import eObrazovanje.aplikacija.repository.UplataRepository;

@RestController
@RequestMapping(value="/api/uplata")
public class UplataController {
	
	@Autowired
	private UplataRepository uRepo;
	private ModelMapper mapper = new ModelMapper();
	
	@GetMapping
	public @ResponseBody List<UplataDTO> readAll(){
		List<Uplata> uplata = (List<Uplata>) uRepo.findAll();
		List<UplataDTO> uplataDTO= new ArrayList<>();
		for (Uplata u : uplata){
			uplataDTO.add(mapper.map(u, UplataDTO.class));
		}
		return uplataDTO;		
	}
	
	@GetMapping("/{id}")
	public @ResponseBody UplataDTO readOne(@PathVariable(value="id")Integer id){
		Uplata u = uRepo.findById(id).get();
		return mapper.map(u, UplataDTO.class);
	}
	
	@PostMapping
	public @ResponseBody UplataDTO create (@RequestBody UplataDTO dto){
		Uplata u = new Uplata();
		u.setId(dto.getId());
		uRepo.save(u);
		
		return mapper.map(u, UplataDTO.class);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody UplataDTO update(@PathVariable(value="id") Integer id, @RequestBody UplataDTO dto){
		Uplata u = uRepo.findById(id).get();
		u.setId(dto.getId());
		uRepo.save(u);
		
		return mapper.map(u, UplataDTO.class);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody UplataDTO delete(@PathVariable(value="id")Integer id){
		Uplata u = uRepo.findById(id).get();
		uRepo.delete(u);
		
		return mapper.map(u, UplataDTO.class);
	}

}
