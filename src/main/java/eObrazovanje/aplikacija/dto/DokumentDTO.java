package eObrazovanje.aplikacija.dto;

import eObrazovanje.aplikacija.model.Dokument;

public class DokumentDTO {

    private int id;
    private String naziv;
    private int ucenik;

    public DokumentDTO() {

    }

    public DokumentDTO(Dokument d) {
        this.id = d.getId();
        this.naziv = d.getNaziv();
        this.ucenik = d.getUcenik().getId();
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

    public int getUcenik() {
        return ucenik;
    }

    public void setUcenik(int ucenik) {
        this.ucenik = ucenik;
    }
}
