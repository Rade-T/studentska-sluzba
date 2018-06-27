import { Osoba } from "./osoba.model";
import { Dokument } from "./dokument.model";
import { Uplata } from "./uplata.model";
import { Polaganje } from "./polaganje.model";
import { Pohadjanje } from "./pohadjanje.model";

export class Ucenik {
    public id: number;
    public brojIndeksa: string;
    public dokumenti: Array<Dokument>;
    public ime: string;
    public prezime: string;
    public jmbg: string;
    public email: string;
    public telefon: string;
    public uplate: Array<Uplata>;
    public polaganja: Array<Polaganje>;
    public pohadjanje: Pohadjanje;

    constructor() {
        
    }
}