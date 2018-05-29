package eObrazovanje.aplikacija.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eObrazovanje.aplikacija.model.Predmet;

@Repository
public interface PredmetRepository extends JpaRepository<Predmet, Integer> {

}
