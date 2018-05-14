package eObrazovanje.aplikacija.model;

import javax.persistence.*;

@Entity
public class Osoba {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
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
	
	public Osoba() {
		super();
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
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
}
