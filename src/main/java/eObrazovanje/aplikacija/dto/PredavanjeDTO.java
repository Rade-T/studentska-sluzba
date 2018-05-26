package eObrazovanje.aplikacija.dto;

import eObrazovanje.aplikacija.model.Predavanje;

public class PredavanjeDTO {

    private int id;

    private int nastavnik;

    private int predmet;

    public PredavanjeDTO() {
    }

    public PredavanjeDTO(Predavanje p) {
        this.id = p.getId();
        this.nastavnik = p.getNastavnik().getId();
        this.predmet = p.getPredmet().getId();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getNastavnik() {
        return nastavnik;
    }

    public void setNastavnik(int nastavnik) {
        this.nastavnik = nastavnik;
    }

    public int getPredmet() {
        return predmet;
    }

    public void setPredmet(int predmet) {
        this.predmet = predmet;
    }
}
