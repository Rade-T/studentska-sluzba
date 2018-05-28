package eObrazovanje.aplikacija.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import eObrazovanje.aplikacija.model.Polaganje;
import eObrazovanje.aplikacija.repository.PolaganjeRepository;

@Component
public class PolaganjeService {
	
	@Autowired
	private PolaganjeRepository polaganjeRepository;
	
	public Polaganje findOne(int id) {
		return polaganjeRepository.findById(id).get();
	}

	public List<Polaganje> findAll() {
		return polaganjeRepository.findAll();
	}

	public Polaganje save(Polaganje polaganje) {
		return polaganjeRepository.save(polaganje);
	}

	public void remove(Polaganje polaganje) {
		polaganjeRepository.deleteById(polaganje.getId());
	}
}
