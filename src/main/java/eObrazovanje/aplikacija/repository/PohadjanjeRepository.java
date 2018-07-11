package eObrazovanje.aplikacija.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eObrazovanje.aplikacija.model.Pohadjanje;

@Repository
public interface PohadjanjeRepository extends JpaRepository<Pohadjanje, Integer> {
	List<Pohadjanje> findByUceniciUsername(String username);
}
