package eObrazovanje.aplikacija.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eObrazovanje.aplikacija.model.Dokument;

public interface DokumentRepository extends JpaRepository<Dokument, Integer> {

}
