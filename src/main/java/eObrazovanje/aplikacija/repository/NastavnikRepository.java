package eObrazovanje.aplikacija.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eObrazovanje.aplikacija.model.Nastavnik;

@Repository
public interface NastavnikRepository extends JpaRepository<Nastavnik, Integer> {
	List<Nastavnik> findByUsername(String username);
}
