package eObrazovanje.aplikacija.dto;

import eObrazovanje.aplikacija.model.Predmet;

public class PredmetDTO {
    private int id;

    private String naziv;

    public PredmetDTO() {

    }

    public PredmetDTO(Predmet p) {
        this.id = p.getId();
        this.naziv = p.getNaziv();
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

}
