package eObrazovanje.aplikacija.dto;

import java.util.ArrayList;
import java.util.List;

import eObrazovanje.aplikacija.model.Predmet;

public class PredmetDTO {
    private int id;

    private String naziv;
//	private List<Integer> polaganja;
//	private List<Integer> predavanja;

    public PredmetDTO() {

    }

    public PredmetDTO(Predmet p) {
        this.id = p.getId();
        this.naziv = p.getNaziv();
//		this.polaganja = new ArrayList<>();
//		this.predavanja = new ArrayList<>();
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

//	public List<Integer> getPolaganja() {
//		return polaganja;
//	}
//
//	public void setPolaganja(List<Integer> polaganja) {
//		this.polaganja = polaganja;
//	}
//
//	public List<Integer> getPredavanja() {
//		return predavanja;
//	}
//
//	public void setPredavanja(List<Integer> predavanja) {
//		this.predavanja = predavanja;
//	}
}
