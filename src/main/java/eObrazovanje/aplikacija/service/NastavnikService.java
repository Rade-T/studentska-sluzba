package eObrazovanje.aplikacija.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import eObrazovanje.aplikacija.model.Nastavnik;
import eObrazovanje.aplikacija.repository.NastavnikRepository;

@Component
public class NastavnikService {
	
	@Autowired
	private NastavnikRepository nastavnikRepository;
	
	public Nastavnik findOne(int id) {
		return nastavnikRepository.findById(id).get();
	}

	public List<Nastavnik> findAll() {
		return nastavnikRepository.findAll();
	}

	public Nastavnik save(Nastavnik nastavnik) {
		return nastavnikRepository.save(nastavnik);
	}

	public void remove(Nastavnik nastavnik) {
		nastavnikRepository.deleteById(nastavnik.getId());
	}
}
