package eObrazovanje.aplikacija.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Nastavnik extends Osoba {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
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

	@OneToMany(mappedBy = "nastavnik")
    private List<Predavanje> predavanja;
	
	public Nastavnik() {
		
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

    public List<Predavanje> getPredavanja() {
        return predavanja;
    }

    public void setPredavanja(List<Predavanje> predavanja) {
        this.predavanja = predavanja;
    }
}
