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

import eObrazovanje.aplikacija.model.Dokument;
import eObrazovanje.aplikacija.service.DokumentService;
import eObrazovanje.aplikacija.dto.DokumentDTO;

@RestController
@RequestMapping(value="/api/dokument")
public class DokumentController {
	
	@Autowired
	private DokumentService dokumentService;
	
	@GetMapping
	public @ResponseBody
    List<DokumentDTO> readAll(){
		List<Dokument> dokumenti = (List<Dokument>) dokumentService.findAll();
		List<DokumentDTO> dokumentiDTO = new ArrayList<>();
		for (Dokument d : dokumenti){
			dokumentiDTO.add(new DokumentDTO(d));
		}
		return dokumentiDTO;		
	}
	
	@GetMapping("/{id}")
	public @ResponseBody
    DokumentDTO readOne(@PathVariable(value="id")Integer id){
		Dokument d = dokumentService.findOne(id);
		return new DokumentDTO(d);
	}
	
	@PostMapping
	public @ResponseBody
    DokumentDTO create (@RequestBody DokumentDTO dto){
		Dokument d = new Dokument();
		d.setNaziv(dto.getNaziv());
		dokumentService.save(d);
		
		return new DokumentDTO(d);
	}
	
	@PutMapping("/{id}")
	public @ResponseBody
    DokumentDTO update(@PathVariable(value="id") Integer id, @RequestBody DokumentDTO dto){
		Dokument d = dokumentService.findOne(id);
		d.setNaziv(dto.getNaziv());
		dokumentService.save(d);
		
		return new DokumentDTO(d);
	}
	
	@DeleteMapping("/{id}")
	public @ResponseBody
    DokumentDTO delete(@PathVariable(value="id")Integer id){
		Dokument d = dokumentService.findOne(id);
		dokumentService.remove(d);
		
		return new DokumentDTO(d);
	}
	

}
