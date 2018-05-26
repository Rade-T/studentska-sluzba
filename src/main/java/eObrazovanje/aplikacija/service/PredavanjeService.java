package eObrazovanje.aplikacija.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import eObrazovanje.aplikacija.model.Predavanje;
import eObrazovanje.aplikacija.repository.PredavanjeRepository;

@Component
public class PredavanjeService {
	
	@Autowired
	private PredavanjeRepository predavanjeRepository;
	
	public Predavanje findOne(int id) {
		return predavanjeRepository.findById(id).get();
	}

	public List<Predavanje> findAll() {
		return predavanjeRepository.findAll();
	}

	public Predavanje save(Predavanje dokument) {
		return predavanjeRepository.save(dokument);
	}

	public void remove(int id) {
		predavanjeRepository.deleteById(id);
	}

}
