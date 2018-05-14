package eObrazovanje.aplikacija.model;

import javax.persistence.*;

@Entity
public class Uplata {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
	private int id;

	@ManyToOne
	private Ucenik ucenik;

	@Column
	private float suma;
	
	public Uplata() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Ucenik getUcenik() {
		return ucenik;
	}

	public void setUcenik(Ucenik ucenik) {
		this.ucenik = ucenik;
	}

	public float getSuma() {
		return suma;
	}

	public void setSuma(float suma) {
		this.suma = suma;
	}
}
