package eObrazovanje.aplikacija.dto;

import java.util.List;

public class UcenikDTO {

    private int brojIndeksa;
    private List<Integer> dokumenti;
    private List<Integer> uplate;

    public UcenikDTO() {

    }

    public int getBrojIndeksa() {
        return brojIndeksa;
    }

    public void setBrojIndeksa(int brojIndeksa) {
        this.brojIndeksa = brojIndeksa;
    }

    public List<Integer> getDokumenti() {
        return dokumenti;
    }

    public void setDokumenti(List<Integer> dokumenti) {
        this.dokumenti = dokumenti;
    }

    public List<Integer> getUplate() {
        return uplate;
    }

    public void setUplate(List<Integer> uplate) {
        this.uplate = uplate;
    }
}
