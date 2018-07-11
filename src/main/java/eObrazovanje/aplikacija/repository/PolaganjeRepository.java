package eObrazovanje.aplikacija.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eObrazovanje.aplikacija.model.Polaganje;

@Repository
public interface PolaganjeRepository extends JpaRepository<Polaganje, Integer> {
	List<Polaganje> findByUcenikUsername(String username);
}
