package eObrazovanje.aplikacija.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Pohadjanje {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@OneToMany(mappedBy = "pohadjanje")
	private List<Ucenik> ucenici;

    @ManyToOne
	private Predmet predmet;
	
	public Pohadjanje() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public List<Ucenik> getUcenici() {
		return ucenici;
	}

	public void setUcenici(List<Ucenik> ucenici) {
		this.ucenici = ucenici;
	}

	public Predmet getPredmet() {
		return predmet;
	}

	public void setPredmet(Predmet predmet) {
		this.predmet = predmet;
	}
}
