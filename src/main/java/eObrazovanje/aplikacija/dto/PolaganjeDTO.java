package eObrazovanje.aplikacija.dto;

import eObrazovanje.aplikacija.model.Polaganje;

public class PolaganjeDTO {

    private int id;

    private int ucenik;

    private int predmet;

    public PolaganjeDTO() {

    }

    public PolaganjeDTO(Polaganje p) {
        this.id = p.getId();
        this.ucenik = p.getUcenik().getId();
        this.predmet = p.getPredmet().getId();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUcenik() {
        return ucenik;
    }

    public void setUcenik(int ucenik) {
        this.ucenik = ucenik;
    }

    public int getPredmet() {
        return predmet;
    }

    public void setPredmet(int predmet) {
        this.predmet = predmet;
    }
}
