import { Osoba } from "./osoba.model";
import { Dokument } from "./dokument.model";
import { Uplata } from "./uplata.model";
import { Polaganje } from "./polaganje.model";
import { Pohadjanje } from "./pohadjanje.model";

export class Ucenik extends Osoba {
    public id: number;
    public brojIndeksa: number;
    public dokumenti: Array<Dokument>;
    public uplate: Array<Uplata>;
    public polaganja: Array<Polaganje>;
    public pohadjanje: Pohadjanje;

    constructor() {
        super();
    }
}