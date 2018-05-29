package eObrazovanje.aplikacija.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import eObrazovanje.aplikacija.model.Dokument;
import eObrazovanje.aplikacija.repository.DokumentRepository;

@Component
public class DokumentService  {
	
	@Autowired
	private DokumentRepository dokumentRepository;
	
	public Dokument findOne(int id) {
		return dokumentRepository.findById(id).get();
	}

	public List<Dokument> findAll() {
		return dokumentRepository.findAll();
	}

	public Dokument save(Dokument dokument) {
		return dokumentRepository.save(dokument);
	}

	public void remove(Dokument dokument) {
		dokumentRepository.deleteById(dokument.getId());
	}

}
