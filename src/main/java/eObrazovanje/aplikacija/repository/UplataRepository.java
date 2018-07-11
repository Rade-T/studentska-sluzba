package eObrazovanje.aplikacija.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eObrazovanje.aplikacija.model.Uplata;

@Repository
public interface UplataRepository extends JpaRepository<Uplata, Integer> {
	List<Uplata> findByUcenikUsername(String username);
}
