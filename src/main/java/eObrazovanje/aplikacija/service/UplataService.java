package eObrazovanje.aplikacija.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import eObrazovanje.aplikacija.model.Uplata;
import eObrazovanje.aplikacija.repository.UplataRepository;

@Component
public class UplataService {
	
	@Autowired
	private UplataRepository uplataRepository;
	
	public Uplata findOne(int id) {
		return uplataRepository.findById(id).get();
	}

	public List<Uplata> findAll() {
		return uplataRepository.findAll();
	}

	public Uplata save(Uplata uplata) {
		return uplataRepository.save(uplata);
	}

	public void remove(Uplata uplata) {
		uplataRepository.deleteById(uplata.getId());
	}

}
