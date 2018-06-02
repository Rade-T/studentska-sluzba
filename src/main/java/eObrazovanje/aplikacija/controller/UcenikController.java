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
import eObrazovanje.aplikacija.service.UcenikService;

@RestController
@RequestMapping(value="/api/ucenik")
public class UcenikController {
	
	@Autowired
	private UcenikService ucenikService;
	
	@GetMapping
	public @ResponseBody
    List<UcenikDTO> readAll(){
		List<Ucenik> ucenik = (List<Ucenik>) ucenikService.findAll();
		List<UcenikDTO> ucenikDTO= new ArrayList<>();
		for (Ucenik u : ucenik){
			ucenikDTO.add(new UcenikDTO(u));
		}
		return ucenikDTO;		
	}
	
	@GetMapping("/{id}")
	public @ResponseBody
	UcenikDTO readOne(@PathVariable(value="id")Integer id){
		Ucenik u = ucenikService.findOne(id);
		return new UcenikDTO(u);
	}
	
	@PostMapping
	public @ResponseBody
	UcenikDTO create (@RequestBody UcenikDTO dto){
		Ucenik u = new Ucenik();
		u.setBrojIndeksa(dto.getBrojIndeksa());
		u.setime(dto.getIme());
		u.setprezime(dto.getPrezime());
		u.setJMBG(dto.getJMBG());
		u.setemail(dto.getEmail());
		u.settelefon(dto.getTelefon());
		ucenikService.save(u);
		
		return new UcenikDTO(u);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody
    UcenikDTO update(@PathVariable(value="id") Integer id, @RequestBody UcenikDTO dto){
		Ucenik u = ucenikService.findOne(id);
		u.setId(dto.getId());
		ucenikService.save(u);
		
		return new UcenikDTO(u);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody
	UcenikDTO delete(@PathVariable(value="id")Integer id){
		Ucenik u = ucenikService.findOne(id);
		ucenikService.remove(u);
		
		return new UcenikDTO(u);
	}
}