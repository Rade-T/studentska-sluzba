package eObrazovanje.aplikacija.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eObrazovanje.aplikacija.model.Predavanje;

@Repository
public interface PredavanjeRepository extends JpaRepository<Predavanje, Integer> {
	List<Predavanje> findByNastavnikUsername(String username);
}
