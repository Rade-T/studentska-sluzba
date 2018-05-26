package eObrazovanje.aplikacija.dto;

import eObrazovanje.aplikacija.model.Pohadjanje;
import eObrazovanje.aplikacija.model.Ucenik;

import java.util.ArrayList;
import java.util.List;

public class PohadjanjeDTO {

    private int id;

    private List<Integer> ucenici;

    private int predmet;

    public PohadjanjeDTO() {

    }

    public PohadjanjeDTO(Pohadjanje p) {
        this.id = p.getId();
        this.predmet = p.getPredmet().getId();
        this.ucenici = new ArrayList<>();
        for (Ucenik u : p.getUcenici()) {
            ucenici.add(u.getId());
        }
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
