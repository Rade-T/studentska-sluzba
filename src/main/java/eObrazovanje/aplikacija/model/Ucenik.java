package eObrazovanje.aplikacija.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Ucenik extends Osoba {
	
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
	private String JMBG;

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
		
	}

	public String getBrojIndeksa() {
		return brojIndeksa;
	}

	public void setBrojIndeksa(String brojIndeksa) {
		this.brojIndeksa = brojIndeksa;
	}
	
	public String getime() {
		return ime;
	}

	public void setime(String ime) {
		this.ime = ime;
	}

	public String getprezime() {
		return prezime;
	}

	public void setprezime(String prezime) {
		this.prezime = prezime;
	}

	public String getJMBG() {
		return JMBG;
	}

	public void setJMBG(String jMBG) {
		JMBG = jMBG;
	}

	public String getemail() {
		return email;
	}

	public void setemail(String email) {
		this.email = email;
	}

	public String gettelefon() {
		return telefon;
	}

	public void settelefon(String telefon) {
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
