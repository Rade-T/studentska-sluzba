package eObrazovanje.aplikacija.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Dokument {
	
	@Id
	@GeneratedValue
	private int id;
	
	private String naziv;
	
	private String ucenik;
	
	public Dokument() {
		
	}

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

	public String getUcenik() {
		return ucenik;
	}

	public void setUcenik(String ucenik) {
		this.ucenik = ucenik;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
}
