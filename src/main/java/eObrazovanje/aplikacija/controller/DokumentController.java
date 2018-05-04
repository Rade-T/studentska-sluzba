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

import antlr.debug.ParserReporter;
import eObrazovanje.aplikacija.dto.DokumentDTO;
import eObrazovanje.aplikacija.dto.PredmetDTO;
import eObrazovanje.aplikacija.model.Dokument;
import eObrazovanje.aplikacija.model.Predmet;
import eObrazovanje.aplikacija.repository.DokumentRepository;

@RestController
@RequestMapping(value="/api/dokument")
public class DokumentController {
	
	@Autowired
	private DokumentRepository DokRepo;
	private ModelMapper mapper = new ModelMapper();
	
	@GetMapping
	public @ResponseBody List<DokumentDTO> readAll(){
		List<Dokument> dokumenti = (List<Dokument>) DokRepo.findAll();
		List<DokumentDTO> dokumentiDTO = new ArrayList<>();
		for (Dokument d : dokumenti){
			dokumentiDTO.add(mapper.map(d, DokumentDTO.class));
		}
		return dokumentiDTO;		
	}
	
	@GetMapping("/{id}")
	public @ResponseBody DokumentDTO readOne(@PathVariable(value="id")Integer id){
		Dokument d = DokRepo.findById(id);
		return new mapper.map(d, DokumentDTO.class);
	}
	
	@PostMapping
	public @ResponseBody DokumentDTO create (@RequestBody DokumentDTO dto){
		Dokument d = new Dokument();
		d.setNaziv(dto.getNaziv());
		DokRepo.save(d);
		
		return new mapper.map(d, DokumentDTO.class);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody DokumentDTO update(@PathVariable(value="id") Integer id, @RequestBody DokumentDTO dto){
		Dokument d = DokRepo.findById(id).get();
		d.setNaziv(dto.getNaziv());
		DokRepo.save(d);
		
		return new mapper.map(d, DokumentDTODTO.class);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody DokumentDTO delete(@PathVariable(value="id")Integer id){
		Dokument d = DokRepo.findById(id).get();
		DokRepo.delete(d);;
		
		return new mapper.map(d, DokumentDTO.class);
	}
	

}
