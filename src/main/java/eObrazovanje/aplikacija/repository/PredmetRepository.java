package eObrazovanje.aplikacija.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eObrazovanje.aplikacija.model.Predmet;

public interface PredmetRepository extends JpaRepository<Predmet, Integer> {

}
