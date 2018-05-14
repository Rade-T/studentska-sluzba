package eObrazovanje.aplikacija.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Predmet {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
	private int id;

	@Column
	private String naziv;

	@OneToMany(mappedBy = "predmet")
    private List<Polaganje> polaganja;

	@OneToMany(mappedBy = "predmet")
    private List<Predavanje> predavanja;

	public Predmet() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

    public List<Polaganje> getPolaganja() {
        return polaganja;
    }

    public void setPolaganja(List<Polaganje> polaganja) {
        this.polaganja = polaganja;
    }

    public List<Predavanje> getPredavanja() {
        return predavanja;
    }

    public void setPredavanja(List<Predavanje> predavanja) {
        this.predavanja = predavanja;
    }
}
