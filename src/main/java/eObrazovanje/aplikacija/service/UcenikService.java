package eObrazovanje.aplikacija.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import eObrazovanje.aplikacija.model.Ucenik;
import eObrazovanje.aplikacija.repository.UcenikRepository;



@Component
public class UcenikService {
	
	@Autowired
	private UcenikRepository ucenikRepository;
	
	public Ucenik findOne(int id) {
		return ucenikRepository.findById(id).get();
	}

	public List<Ucenik> findAll() {
		return ucenikRepository.findAll();
	}

	public Ucenik save(Ucenik ucenik) {
		return ucenikRepository.save(ucenik);
	}

	public void remove(Ucenik ucenik) {
		ucenikRepository.deleteById(ucenik.getId());
	}

}
