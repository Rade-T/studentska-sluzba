package eObrazovanje.aplikacija.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eObrazovanje.aplikacija.model.Dokument;

@Repository
public interface DokumentRepository extends JpaRepository<Dokument, Integer> {
	
}
