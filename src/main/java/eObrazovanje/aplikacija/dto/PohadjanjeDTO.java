package eObrazovanje.aplikacija.dto;

import java.util.List;

public class PohadjanjeDTO {

    private int id;

    private List<Integer> ucenici;

    private int predmet;

    public PohadjanjeDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<Integer> getUcenici() {
        return ucenici;
    }

    public void setUcenici(List<Integer> ucenici) {
        this.ucenici = ucenici;
    }

    public int getPredmet() {
        return predmet;
    }

    public void setPredmet(int predmet) {
        this.predmet = predmet;
    }
}
