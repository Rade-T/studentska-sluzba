package eObrazovanje.aplikacija.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eObrazovanje.aplikacija.model.Korisnik;

@Repository
public interface KorisnikRepository extends JpaRepository<Korisnik, Integer> {

}
