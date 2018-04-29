package eObrazovanje.aplikacija.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eObrazovanje.aplikacija.model.Ucenik;

public interface UcenikRepository extends JpaRepository<Ucenik, Integer> {

}
