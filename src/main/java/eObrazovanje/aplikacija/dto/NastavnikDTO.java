package eObrazovanje.aplikacija.dto;

import eObrazovanje.aplikacija.model.Nastavnik;

public class NastavnikDTO {

    private int id;

    public NastavnikDTO() {
    }

    public NastavnikDTO(Nastavnik n) {
        this.id = n.getId();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
