package eObrazovanje.aplikacija.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import eObrazovanje.aplikacija.model.Dokument;

@Repository
public interface DokumentRepository extends CrudRepository<Dokument, Integer> {
	
}
