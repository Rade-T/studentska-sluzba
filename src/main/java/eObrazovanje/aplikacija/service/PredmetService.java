package eObrazovanje.aplikacija.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import eObrazovanje.aplikacija.model.Predmet;
import eObrazovanje.aplikacija.repository.PredmetRepository;


@Component
public class PredmetService {
	
	@Autowired
	private PredmetRepository predmetRepository;
	
	public Predmet findOne(int id) {
		return predmetRepository.findById(id).get();
	}

	public List<Predmet> findAll() {
		return predmetRepository.findAll();
	}

	public Predmet save(Predmet predmet) {
		return predmetRepository.save(predmet);
	}

	public void remove(Predmet predmet) {
		predmetRepository.deleteById(predmet.getId());
	}


}
