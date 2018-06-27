package eObrazovanje.aplikacija.model;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Ucenik {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column
	private String brojIndeksa;
	
	@Column
	private String ime;

	@Column
	private String prezime;

	@Column
	private String jmbg;

	@Column
	private String email;

	@Column
	private String telefon;

	@OneToMany(mappedBy = "ucenik")
	private List<Dokument> dokumenti;

	@OneToMany(mappedBy = "ucenik")
	private List<Uplata> uplate;

	@OneToMany(mappedBy = "ucenik")
    private List<Polaganje> polaganja;

	@ManyToOne
    private Pohadjanje pohadjanje;
	
	public Ucenik() {
		this.uplate = new ArrayList<>();
		this.polaganja = new ArrayList<>();
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

    public Pohadjanje getPohadjanje() {
        return pohadjanje;
    }

    public void setPohadjanje(Pohadjanje pohadjanje) {
        this.pohadjanje = pohadjanje;
    }

    public List<Polaganje> getPolaganja() {
        return polaganja;
    }

    public void setPolaganja(List<Polaganje> polaganja) {
        this.polaganja = polaganja;
    }
    
    public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
}
