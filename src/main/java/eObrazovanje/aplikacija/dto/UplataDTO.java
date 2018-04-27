package eObrazovanje.aplikacija.dto;

public class UplataDTO {
    private int id;

    private int ucenik;

    private float suma;

    public UplataDTO() {
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
