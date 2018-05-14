package eObrazovanje.aplikacija.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Nastavnik extends Osoba {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
	private int id;

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

    public List<Predavanje> getPredavanja() {
        return predavanja;
    }

    public void setPredavanja(List<Predavanje> predavanja) {
        this.predavanja = predavanja;
    }
}
