package eObrazovanje.aplikacija.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eObrazovanje.aplikacija.model.Predavanje;

@Repository
public interface PredavanjeRepository extends JpaRepository<Predavanje, Integer> {

}
