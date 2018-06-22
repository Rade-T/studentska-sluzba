package eObrazovanje.aplikacija.dto;

import eObrazovanje.aplikacija.model.Nastavnik;

public class NastavnikDTO {

    private int id;
	private String ime;
	private String prezime;
	private String JMBG;
	private String email;
	private String telefon;

    public NastavnikDTO() {
    }

    public NastavnikDTO(Nastavnik n) {
        this.id = n.getId();
		this.ime = n.getime();
		this.prezime = n.getprezime();
		this.JMBG = n.getJMBG();
		this.email = n.getemail();
		this.telefon = n.gettelefon();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
}
