package eObrazovanje.aplikacija.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eObrazovanje.aplikacija.model.Predavanje;

public interface PredavanjeRepository extends JpaRepository<Predavanje, Integer> {

}
