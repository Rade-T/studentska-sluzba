package eObrazovanje.aplikacija.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
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
import eObrazovanje.aplikacija.dto.PolaganjeDTO;
import eObrazovanje.aplikacija.model.Polaganje;
import eObrazovanje.aplikacija.model.Polaganje;
import eObrazovanje.aplikacija.security.AuthenticationFacade;
import eObrazovanje.aplikacija.service.PolaganjeService;
import eObrazovanje.aplikacija.service.PredmetService;
import eObrazovanje.aplikacija.service.UcenikService;


@RestController
@RequestMapping(value="/api/polaganje")
public class PolaganjeController {
	
	@Autowired
	private PolaganjeService polaganjeService;
	
	@Autowired
	private UcenikService ucenikService;
	
	@Autowired
	private PredmetService predmetService;
	
	@Autowired
	private AuthenticationFacade authenticationFacade;
	
	@GetMapping
	public @ResponseBody
	List<PolaganjeDTO> readAll(){
		Authentication authentication = authenticationFacade.getAuthentication();
		Object[] authorities = authentication.getAuthorities().toArray();

		if (authorities[0].toString().equals("ucenik")) {
			List<Polaganje> polaganja = (List<Polaganje>) polaganjeService.findByUcenikUsername(authentication.getName());
			List<PolaganjeDTO> polaganjaDTO = new ArrayList<>();
			for (Polaganje pr : polaganja){
				polaganjaDTO.add(new PolaganjeDTO(pr));
			}
			return polaganjaDTO;
		}
		List<Polaganje> polaganje= (List<Polaganje>) polaganjeService.findAll();
		List<PolaganjeDTO> polaganjeDTO = new ArrayList<>();
		for (Polaganje p : polaganje){
			polaganjeDTO.add(new PolaganjeDTO(p));
		}
		return polaganjeDTO;		
	}
	
	@GetMapping("/{id}")
	public @ResponseBody
    PolaganjeDTO readOne(@PathVariable(value="id")Integer id){
		Polaganje p = polaganjeService.findOne(id);
		return new PolaganjeDTO(p);
	}
	
	@PostMapping
	public @ResponseBody
    PolaganjeDTO create (@RequestBody PolaganjeDTO dto){
		Polaganje p = new Polaganje();
		p.setId(dto.getId());
		p.setUcenik(ucenikService.findOne(dto.getUcenik()));
		p.setPredmet(predmetService.findOne(dto.getPredmet()));
		polaganjeService.save(p);
		
		return new PolaganjeDTO(p);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody
    PolaganjeDTO update(@PathVariable(value="id") Integer id, @RequestBody PolaganjeDTO dto){
		Polaganje p = polaganjeService.findOne(id);
		p.setId(dto.getId());
		p.setUcenik(ucenikService.findOne(dto.getUcenik()));
		p.setPredmet(predmetService.findOne(dto.getPredmet()));
		polaganjeService.save(p);
		
		return new PolaganjeDTO(p);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody
    PolaganjeDTO delete(@PathVariable(value="id")Integer id){
		Polaganje p = polaganjeService.findOne(id);
		polaganjeService.remove(p);
		
		return new PolaganjeDTO(p);
	}
	

}
