package eObrazovanje.aplikacija.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eObrazovanje.aplikacija.model.Uplata;

@Repository
public interface UplataRepository extends JpaRepository<Uplata, Integer> {

}
