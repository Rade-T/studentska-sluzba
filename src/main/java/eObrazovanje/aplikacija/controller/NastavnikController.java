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
import eObrazovanje.aplikacija.model.Nastavnik;
import eObrazovanje.aplikacija.security.AuthenticationFacade;
import eObrazovanje.aplikacija.service.NastavnikService;



@RestController
@RequestMapping(value="/api/nastavnik")
public class NastavnikController {

	@Autowired
	private NastavnikService nastavnikService;
	
	@Autowired
	private AuthenticationFacade authenticationFacade;
	
	@GetMapping
	public @ResponseBody
    List<NastavnikDTO> readAll(){
		Authentication authentication = authenticationFacade.getAuthentication();
		Object[] authorities = authentication.getAuthorities().toArray();

		if (authorities[0].toString().equals("nastavnik")) {
			System.out.println(authorities[0]);
			System.out.println(authentication.getName());
			List<Nastavnik> nastavnici = (List<Nastavnik>) nastavnikService.findByUsername(authentication.getName());
			List<NastavnikDTO> nastavnikDTO = new ArrayList<>();
			for (Nastavnik n : nastavnici){
				nastavnikDTO.add(new NastavnikDTO(n));
			}
			System.out.println(nastavnikDTO.size());
			return nastavnikDTO;
		}
		
		List<Nastavnik> nastavnici = (List<Nastavnik>) nastavnikService.findAll();
		List<NastavnikDTO> nastavnikDTO = new ArrayList<>();
		for (Nastavnik n : nastavnici){
			nastavnikDTO.add(new NastavnikDTO(n));
		}
		return nastavnikDTO;		
	}
	
	@GetMapping("/{id}")
	public @ResponseBody
    NastavnikDTO readOne(@PathVariable(value="id")Integer id){
		Nastavnik n = nastavnikService.findOne(id);
		return new NastavnikDTO(n);
	}
	
	@PostMapping
	public @ResponseBody
    NastavnikDTO create (@RequestBody NastavnikDTO dto){
		Nastavnik n = new Nastavnik();
		n.setIme(dto.getIme());
		n.setPrezime(dto.getPrezime());
		n.setJmbg(dto.getJmbg());
		n.setTelefon(dto.getTelefon());
		n.setEmail(dto.getEmail());
		n.setUsername(dto.getUsername());
		nastavnikService.save(n);
		System.out.println("dto: " + dto.getJmbg());
		System.out.println("n: " + n.getJmbg());
		return new NastavnikDTO(n);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody
    NastavnikDTO update(@PathVariable(value="id") Integer id, @RequestBody NastavnikDTO dto){
		Nastavnik n = nastavnikService.findOne(id);
		n.setId(dto.getId());
		n.setIme(dto.getIme());
		n.setPrezime(dto.getPrezime());
		n.setJmbg(dto.getJmbg());
		n.setTelefon(dto.getTelefon());
		n.setEmail(dto.getEmail());
		n.setUsername(dto.getUsername());
		nastavnikService.save(n);
		return new NastavnikDTO(n);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody
    NastavnikDTO delete(@PathVariable(value="id")Integer id){
		Nastavnik n = nastavnikService.findOne(id);
		nastavnikService.remove(n);
		
		return new NastavnikDTO(n);
	}
}
