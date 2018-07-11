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

import eObrazovanje.aplikacija.dto.NastavnikDTO;
import eObrazovanje.aplikacija.dto.PredavanjeDTO;
import eObrazovanje.aplikacija.model.Nastavnik;
import eObrazovanje.aplikacija.model.Predavanje;
import eObrazovanje.aplikacija.security.AuthenticationFacade;
import eObrazovanje.aplikacija.service.NastavnikService;
import eObrazovanje.aplikacija.service.PredavanjeService;
import eObrazovanje.aplikacija.service.PredmetService;


@RestController
@RequestMapping(value="/api/predavanje")
public class PredavanjeController {
	
	@Autowired
	private PredavanjeService predavanjeService;
	
	@Autowired
	private NastavnikService nastavnikService;
	
	@Autowired
	private PredmetService predmetService;
	
	@Autowired
	private AuthenticationFacade authenticationFacade;
	
	@GetMapping
	public @ResponseBody
    List<PredavanjeDTO> readAll(){
		Authentication authentication = authenticationFacade.getAuthentication();
		Object[] authorities = authentication.getAuthorities().toArray();

		if (authorities[0].toString().equals("nastavnik")) {
			List<Predavanje> predavanja = (List<Predavanje>) predavanjeService.findByNastavnikUsername(authentication.getName());
			List<PredavanjeDTO> predavanjaDTO = new ArrayList<>();
			for (Predavanje pr : predavanja){
				predavanjaDTO.add(new PredavanjeDTO(pr));
			}
			return predavanjaDTO;
		}
		
		List<Predavanje> predavanja = (List<Predavanje>) predavanjeService.findAll();
		List<PredavanjeDTO> predavanjaDTO = new ArrayList<>();
		for (Predavanje pr : predavanja){
			predavanjaDTO.add(new PredavanjeDTO(pr));
		}
		return predavanjaDTO;		
	}
	
	@GetMapping("/{id}")
	public @ResponseBody
    PredavanjeDTO readOne(@PathVariable(value="id")Integer id){
		Predavanje pr = predavanjeService.findOne(id);
		return new PredavanjeDTO(pr);
	}
	
	@PostMapping
	public @ResponseBody
    PredavanjeDTO create (@RequestBody PredavanjeDTO dto){
		Predavanje pr = new Predavanje();
		pr.setNastavnik(nastavnikService.findOne(dto.getNastavnik()));
		pr.setPredmet(predmetService.findOne(dto.getPredmet()));
		predavanjeService.save(pr);
		
		return new PredavanjeDTO(pr);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody
    PredavanjeDTO update(@PathVariable(value="id") Integer id, @RequestBody PredavanjeDTO dto){
		Predavanje pr = predavanjeService.findOne(id);
		pr.setId(dto.getId());
		pr.setNastavnik(nastavnikService.findOne(dto.getNastavnik()));
		pr.setPredmet(predmetService.findOne(dto.getPredmet()));
		predavanjeService.save(pr);
		
		return new PredavanjeDTO(pr);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody
    PredavanjeDTO delete(@PathVariable(value="id")Integer id){
		Predavanje pr = predavanjeService.findOne(id);
		predavanjeService.remove(pr);;
		
		return new PredavanjeDTO(pr);
	}

}
