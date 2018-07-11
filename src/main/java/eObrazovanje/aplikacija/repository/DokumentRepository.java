package eObrazovanje.aplikacija.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eObrazovanje.aplikacija.model.Dokument;

@Repository
public interface DokumentRepository extends JpaRepository<Dokument, Integer> {
	List<Dokument> findByUcenikUsername(String username);
}
