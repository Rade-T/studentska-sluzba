package eObrazovanje.aplikacija.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import eObrazovanje.aplikacija.model.Pohadjanje;
import eObrazovanje.aplikacija.repository.PohadjanjeRepository;

@Component
public class PohadjanjeService {
	
	@Autowired
	private PohadjanjeRepository pohadjanjeRepository;
	
	public Pohadjanje findOne(int id) {
		return pohadjanjeRepository.findById(id).get();
	}

	public List<Pohadjanje> findAll() {
		return pohadjanjeRepository.findAll();
	}

	public Pohadjanje save(Pohadjanje pohadjanje) {
		return pohadjanjeRepository.save(pohadjanje);
	}

	public void remove(Pohadjanje pohadjanje) {
		pohadjanjeRepository.deleteById(pohadjanje.getId());
	}
	
	public List<Pohadjanje> findByUcenikUsername(String username) {
		return pohadjanjeRepository.findByUceniciUsername(username);
	}
}
