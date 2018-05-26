package eObrazovanje.aplikacija.dto;

import eObrazovanje.aplikacija.model.Korisnik;

public class KorisnikDTO {

    private String korisnickoIme;

    private String lozinka;

    private String uloga;

    public KorisnikDTO() {
    }

    public KorisnikDTO(Korisnik k) {
        this.korisnickoIme = k.getKorisnickoIme();
        this.lozinka = k.getLozinka();
        this.uloga = k.getLozinka();
    }

    public String getKorisnickoIme() {
        return korisnickoIme;
    }

    public void setKorisnickoIme(String korisnickoIme) {
        this.korisnickoIme = korisnickoIme;
    }

    public String getLozinka() {
        return lozinka;
    }

    public void setLozinka(String lozinka) {
        this.lozinka = lozinka;
    }

    public String getUloga() {
        return uloga;
    }

    public void setUloga(String uloga) {
        this.uloga = uloga;
    }
}
