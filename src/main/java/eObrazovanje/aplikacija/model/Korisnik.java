package eObrazovanje.aplikacija.model;

import javax.persistence.Entity;

@Entity
public class Korisnik {
	
	private String korisnickoIme;
	
	private String lozinka;
	
	private String uloga;
	
	public Korisnik() {
		
	}

	public String getKorisnickoIme() {
		return korisnickoIme;
	}

	public void setKorisnickoIme(String korisnickoIme) {
		this.korisnickoIme = korisnickoIme;
	}

	public String getLozinka() {
		return lozinka;
	}

	public void setLozinka(String lozinka) {
		this.lozinka = lozinka;
	}

	public String getUloga() {
		return uloga;
	}

	public void setUloga(String uloga) {
		this.uloga = uloga;
	}
}
