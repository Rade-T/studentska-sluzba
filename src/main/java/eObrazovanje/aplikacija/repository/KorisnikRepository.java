package eObrazovanje.aplikacija.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eObrazovanje.aplikacija.model.Korisnik;

public interface KorisnikRepository extends JpaRepository<Korisnik, Integer> {

}
