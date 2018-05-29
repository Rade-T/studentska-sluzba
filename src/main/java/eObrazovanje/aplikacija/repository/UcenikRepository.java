package eObrazovanje.aplikacija.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eObrazovanje.aplikacija.model.Ucenik;

@Repository
public interface UcenikRepository extends JpaRepository<Ucenik, Integer> {

}
