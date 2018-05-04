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

import eObrazovanje.aplikacija.dto.PredavanjeDTO;
import eObrazovanje.aplikacija.model.Predavanje;
import eObrazovanje.aplikacija.repository.PredavanjeRepository;

@RestController
@RequestMapping(value="/api/predavanje")
public class PredavanjeController {
	
	@Autowired
	private PredavanjeRepository PrRepo;
	private ModelMapper mapper = new ModelMapper();
	
	@GetMapping
	public @ResponseBody List<PredavanjeDTO> readAll(){
		List<Predavanje> predavanja = (List<Predavanje>) PrRepo.findAll();
		List<PredavanjeDTO> predavanjaDTO = new ArrayList<>();
		for (Predavanje pr : predavanja){
			predavanjaDTO.add(mapper.map(pr, PredavanjeDTO.class));
		}
		return predavanjaDTO;		
	}
	
	@GetMapping("/{id}")
	public @ResponseBody PredavanjeDTO readOne(@PathVariable(value="id")Integer id){
		Predavanje pr = PrRepo.findById(id);
		return new mapper.map(pr, PredavanjeDTO.class);
	}
	
	@PostMapping
	public @ResponseBody PredavanjeDTO create (@RequestBody PredavanjeDTO dto){
		Predavanje pr = new Predavanje();
		pr.setId(dto.getId());
		PrRepo.save(pr);
		
		return new mapper.map(pf, PredavanjeDTO.class);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody PredavanjeDTO update(@PathVariable(value="id") Integer id, @RequestBody PredavanjeDTO dto){
		Predavanje pr = PrRepo.findById(id).get();
		pr.setId(dto.getId());
		PrRepo.save(pr);
		
		return new mapper.map(pr, PredavanjeDTO.class);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody PredavanjeDTO delete(@PathVariable(value="id")Integer id){
		Predavanje pr = PrRepo.findById(id).get();
		PrRepo.delete(pr);;
		
		return new mapper.map(pr, PredavanjeDTO.class);
	}

}
