package eObrazovanje.aplikacija.dto;

import eObrazovanje.aplikacija.model.Nastavnik;

public class NastavnikDTO {

    private int id;
	private String ime;
	private String prezime;
	private String jmbg;
	private String email;
	private String telefon;
	private String username;

    public NastavnikDTO() {
    }

    public NastavnikDTO(Nastavnik n) {
        this.id = n.getId();
		this.ime = n.getIme();
		this.prezime = n.getPrezime();
		this.jmbg = n.getJmbg();
		this.email = n.getEmail();
		this.telefon = n.getTelefon();
		this.username = n.getUsername();
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

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
}
