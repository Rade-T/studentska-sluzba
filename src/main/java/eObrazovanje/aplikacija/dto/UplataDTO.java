package eObrazovanje.aplikacija.dto;

import eObrazovanje.aplikacija.model.Uplata;

public class UplataDTO {
    private int id;

    private int ucenik;

    private float suma;

    public UplataDTO() {
    }

    public UplataDTO(Uplata u) {
        this.id = u.getId();
        this.ucenik = u.getUcenik().getId();
        this.suma = u.getSuma();
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

    public float getSuma() {
        return suma;
    }

    public void setSuma(float suma) {
        this.suma = suma;
    }
}
