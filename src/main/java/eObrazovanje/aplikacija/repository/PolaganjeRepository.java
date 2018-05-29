package eObrazovanje.aplikacija.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eObrazovanje.aplikacija.model.Polaganje;

@Repository
public interface PolaganjeRepository extends JpaRepository<Polaganje, Integer> {

}
