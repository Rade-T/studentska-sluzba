package eObrazovanje.aplikacija.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eObrazovanje.aplikacija.model.Osoba;

@Repository
public interface OsobaRepository extends JpaRepository<Osoba, Integer>{

}
