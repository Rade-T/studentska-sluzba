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
	private String JMBG;
	private String email;
	private String telefon;
	private List<Integer> dokumenti;
	private List<Integer> uplate;
	private int pohadjanje;

	public UcenikDTO() {

	}

	public UcenikDTO(Ucenik u) {
		this.id = u.getId();
		this.brojIndeksa = u.getBrojIndeksa();
		this.ime = u.getime();
		this.prezime = u.getprezime();
		this.JMBG = u.getJMBG();
		this.email = u.getemail();
		this.telefon = u.gettelefon();
		this.dokumenti = new ArrayList<>();
		this.uplate = new ArrayList<>();

		for (Dokument d : u.getDokumenti()) {
			dokumenti.add(d.getId());
		}
		for (Uplata up : u.getUplate()) {
			uplate.add(up.getId());
		}
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

	public String getJMBG() {
		return JMBG;
	}

	public void setJMBG(String jMBG) {
		JMBG = jMBG;
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

	public int getPohadjanje() {
		return pohadjanje;
	}

	public void setPohadjanje(int pohadjanje) {
		this.pohadjanje = pohadjanje;
	}
}
