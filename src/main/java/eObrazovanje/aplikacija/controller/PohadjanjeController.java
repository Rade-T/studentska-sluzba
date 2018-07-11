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

import eObrazovanje.aplikacija.dto.PohadjanjeDTO;
import eObrazovanje.aplikacija.dto.PohadjanjeDTO;
import eObrazovanje.aplikacija.model.Pohadjanje;
import eObrazovanje.aplikacija.model.Pohadjanje;
import eObrazovanje.aplikacija.model.Ucenik;
import eObrazovanje.aplikacija.security.AuthenticationFacade;
import eObrazovanje.aplikacija.service.PohadjanjeService;
import eObrazovanje.aplikacija.service.PredmetService;
import eObrazovanje.aplikacija.service.UcenikService;


@RestController
@RequestMapping(value="/api/pohadjanje")
public class PohadjanjeController {
	
	@Autowired
	private PohadjanjeService pohadjanjeService;
	
	@Autowired
	private PredmetService predmetService;
	
	@Autowired
	private UcenikService ucenikService;
	
	@Autowired
	private AuthenticationFacade authenticationFacade;
	
	@GetMapping
	public @ResponseBody
    List<PohadjanjeDTO> readAll(){
		Authentication authentication = authenticationFacade.getAuthentication();
		Object[] authorities = authentication.getAuthorities().toArray();

		if (authorities[0].toString().equals("ucenik")) {
			List<Pohadjanje> pohadjanja = (List<Pohadjanje>) pohadjanjeService.findByUcenikUsername(authentication.getName());
			List<PohadjanjeDTO> pohadjanjaDTO = new ArrayList<>();
			for (Pohadjanje pr : pohadjanja){
				pohadjanjaDTO.add(new PohadjanjeDTO(pr));
			}
			return pohadjanjaDTO;
		}
		
		List<Pohadjanje> pohadjanje = (List<Pohadjanje>) pohadjanjeService.findAll();
		List<PohadjanjeDTO> pohadjanjeDTO = new ArrayList<>();
		for (Pohadjanje p : pohadjanje){
			pohadjanjeDTO.add(new PohadjanjeDTO(p));
		}
		return pohadjanjeDTO;		
	}
	
	@GetMapping("/{id}")
	public @ResponseBody
    PohadjanjeDTO readOne(@PathVariable(value="id")Integer id){
		Pohadjanje p = pohadjanjeService.findOne(id);
		return new PohadjanjeDTO(p);
	}
	
	@PostMapping
	public @ResponseBody
    PohadjanjeDTO create (@RequestBody PohadjanjeDTO dto){
		Pohadjanje p = new Pohadjanje();
		p.setPredmet(predmetService.findOne(dto.getPredmet()));
		p.setUcenici(new ArrayList<Ucenik>());
		pohadjanjeService.save(p);
		for (int i = 0;i < dto.getUcenici().size();i++) {
			Ucenik u = ucenikService.findOne(dto.getUcenici().get(i));
			u.getPohadjanja().add(p);
			p.getUcenici().add(u);
			ucenikService.save(u);
		}
		pohadjanjeService.save(p);
		
		return new PohadjanjeDTO(p);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody
    PohadjanjeDTO update(@PathVariable(value="id") Integer id, @RequestBody PohadjanjeDTO dto){
		Pohadjanje p = pohadjanjeService.findOne(id);
		p.setId(dto.getId());
		p.setPredmet(predmetService.findOne(dto.getPredmet()));
		p.setUcenici(new ArrayList<Ucenik>());
		for (int i = 0;i < dto.getUcenici().size();i++) {
			Ucenik u = ucenikService.findOne(dto.getUcenici().get(i));
			p.getUcenici().add(u);
		}
		pohadjanjeService.save(p);
		
		return new PohadjanjeDTO(p);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody
    PohadjanjeDTO delete(@PathVariable(value="id")Integer id){
		Pohadjanje p = pohadjanjeService.findOne(id);
		pohadjanjeService.remove(p);
		
		return new PohadjanjeDTO(p);
	}
}
