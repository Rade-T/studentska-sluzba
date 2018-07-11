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

import eObrazovanje.aplikacija.dto.UplataDTO;
import eObrazovanje.aplikacija.dto.UplataDTO;
import eObrazovanje.aplikacija.model.Uplata;
import eObrazovanje.aplikacija.model.Uplata;
import eObrazovanje.aplikacija.security.AuthenticationFacade;
import eObrazovanje.aplikacija.service.UcenikService;
import eObrazovanje.aplikacija.service.UplataService;


@RestController
@RequestMapping(value="/api/uplata")
public class UplataController {
	
	@Autowired
	private UplataService uplataService;
	
	@Autowired
	private UcenikService ucenikService;
	
	@Autowired
	private AuthenticationFacade authenticationFacade;
	
	@GetMapping
	public @ResponseBody
    List<UplataDTO> readAll(){
		Authentication authentication = authenticationFacade.getAuthentication();
		Object[] authorities = authentication.getAuthorities().toArray();

		if (authorities[0].toString().equals("ucenik")) {
			List<Uplata> uplate = (List<Uplata>) uplataService.findByUcenikUsername(authentication.getName());
			List<UplataDTO> uplateDTO = new ArrayList<>();
			for (Uplata pr : uplate){
				uplateDTO.add(new UplataDTO(pr));
			}
			return uplateDTO;
		}
		
		List<Uplata> uplata = (List<Uplata>) uplataService.findAll();
		List<UplataDTO> uplataDTO= new ArrayList<>();
		for (Uplata u : uplata){
			uplataDTO.add(new UplataDTO(u));
		}
		return uplataDTO;		
	}
	
	@GetMapping("/{id}")
	public @ResponseBody
    UplataDTO readOne(@PathVariable(value="id")Integer id){
		Uplata u = uplataService.findOne(id);
		return new UplataDTO(u);
	}
	
	@PostMapping
	public @ResponseBody
    UplataDTO create (@RequestBody UplataDTO dto){
		Uplata u = new Uplata();
		u.setId(dto.getId());
		u.setSuma(dto.getSuma());
		u.setUcenik(ucenikService.findOne(dto.getUcenik()));
		uplataService.save(u);
		
		return new UplataDTO(u);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody
    UplataDTO update(@PathVariable(value="id") Integer id, @RequestBody UplataDTO dto){
		Uplata u = uplataService.findOne(id);
		u.setId(dto.getId());
		u.setSuma(dto.getSuma());
		u.setUcenik(ucenikService.findOne(dto.getUcenik()));
		uplataService.save(u);
		
		return new UplataDTO(u);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody
    UplataDTO delete(@PathVariable(value="id")Integer id){
		Uplata u = uplataService.findOne(id);
		uplataService.remove(u);
		
		return new UplataDTO(u);
	}

}
