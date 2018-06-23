import { Nastavnik } from "./nastavnik.model";
import { Predmet } from "./predmet.model";

export class Predavanje {
    
    public id: number;
    public nastavnik: Nastavnik;
    public predmet: Predmet;

    constructor()
    {
    }
}