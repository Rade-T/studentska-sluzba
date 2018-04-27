package eObrazovanje.aplikacija.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Nastavnik extends Osoba {
	
	@Id
	@GeneratedValue
	private int id;
	
	public Nastavnik() {
		
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
}
