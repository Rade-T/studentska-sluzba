package eObrazovanje.aplikacija.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eObrazovanje.aplikacija.model.Pohadjanje;

public interface PohadjanjeInterface extends JpaRepository<Pohadjanje, Integer> {

}
