package eObrazovanje.aplikacija.model;

import javax.persistence.*;

@Entity
public class Predavanje {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
	private int id;

	@ManyToOne
	private Nastavnik nastavnik;

	@ManyToOne
	private Predmet predmet;
	
	public Predavanje() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Nastavnik getNastavnik() {
		return nastavnik;
	}

	public void setNastavnik(Nastavnik nastavnik) {
		this.nastavnik = nastavnik;
	}

	public Predmet getPredmet() {
		return predmet;
	}

	public void setPredmet(Predmet predmet) {
		this.predmet = predmet;
	}
}
