package eObrazovanje.aplikacija.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Ucenik extends Osoba {
	
	@Id
	private int brojIndeksa;
	private List<Dokument> dokumenti;
	private List<Uplata> uplate;
	
	public Ucenik() {
		
	}

	public int getBrojIndeksa() {
		return brojIndeksa;
	}

	public void setBrojIndeksa(int brojIndeksa) {
		this.brojIndeksa = brojIndeksa;
	}

	public List<Dokument> getDokumenti() {
		return dokumenti;
	}

	public void setDokumenti(List<Dokument> dokumenti) {
		this.dokumenti = dokumenti;
	}

	public List<Uplata> getUplate() {
		return uplate;
	}

	public void setUplate(List<Uplata> uplate) {
		this.uplate = uplate;
	}
}
