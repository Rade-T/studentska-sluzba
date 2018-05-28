package eObrazovanje.aplikacija.dto;

import java.util.ArrayList;
import java.util.List;

import eObrazovanje.aplikacija.model.Dokument;
import eObrazovanje.aplikacija.model.Ucenik;
import eObrazovanje.aplikacija.model.Uplata;

public class UcenikDTO {

	private int id;	
    private int brojIndeksa;
    private List<Integer> dokumenti;
    private List<Integer> uplate;

    public UcenikDTO() {

    }

    public UcenikDTO(Ucenik u) {
    	this.id = u.getId();
        this.brojIndeksa = u.getBrojIndeksa();
        this.dokumenti = new ArrayList<>();
        this.uplate = new ArrayList<>();

        for (Dokument d : u.getDokumenti()) {
            dokumenti.add(d.getId());
        }
        for (Uplata up : u.getUplate()) {
            dokumenti.add(up.getId());
        }
    }
    

    public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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
