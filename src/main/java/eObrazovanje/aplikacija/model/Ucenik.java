package eObrazovanje.aplikacija.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Ucenik extends Osoba {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column
	private int brojIndeksa;

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
