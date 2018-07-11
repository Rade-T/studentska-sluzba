package eObrazovanje.aplikacija.dto;

import java.util.ArrayList;
import java.util.List;

import eObrazovanje.aplikacija.model.Dokument;
import eObrazovanje.aplikacija.model.Ucenik;
import eObrazovanje.aplikacija.model.Uplata;

public class UcenikDTO {

	private int id;
	private String brojIndeksa;
	private String ime;
	private String prezime;
	private String jmbg;
	private String email;
	private String telefon;
	private String username;
	private List<Integer> dokumenti;
	private List<Integer> uplate;
//	private int pohadjanje;

	public UcenikDTO() {

	}

	public UcenikDTO(Ucenik u) {
		this.id = u.getId();
		this.brojIndeksa = u.getBrojIndeksa();
		this.ime = u.getIme();
		this.prezime = u.getPrezime();
		this.jmbg = u.getJmbg();
		this.email = u.getEmail();
		this.telefon = u.getTelefon();
		this.dokumenti = new ArrayList<>();
		this.uplate = new ArrayList<>();
		this.username = u.getUsername();

//		for (Dokument d : u.getDokumenti()) {
//			dokumenti.add(d.getId());
//		}
//		for (Uplata up : u.getUplate()) {
//			uplate.add(up.getId());
//		}
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBrojIndeksa() {
		return brojIndeksa;
	}

	public void setBrojIndeksa(String brojIndeksa) {
		this.brojIndeksa = brojIndeksa;
	}

	public String getIme() {
		return ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public String getPrezime() {
		return prezime;
	}

	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}

	public String getJmbg() {
		return jmbg;
	}

	public void setJmbg(String jmbg) {
		this.jmbg = jmbg;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefon() {
		return telefon;
	}

	public void setTelefon(String telefon) {
		this.telefon = telefon;
	}

	public List<Integer> getDokumenti() {
		return dokumenti;
	}

	public void setDokumenti(List<Integer> dokumenti) {
		this.dokumenti = dokumenti;
	}

	public List<Integer> getUplate() {
		return uplate;
	}

	public void setUplate(List<Integer> uplate) {
		this.uplate = uplate;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

//	public int getPohadjanje() {
//		return pohadjanje;
//	}
//
//	public void setPohadjanje(int pohadjanje) {
//		this.pohadjanje = pohadjanje;
//	}
}
