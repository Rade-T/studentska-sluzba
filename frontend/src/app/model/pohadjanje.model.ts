import { Ucenik } from "./ucenik.model";
import { Predmet } from "./predmet.model";

export class Pohadjanje {

    public id: number;
    public ucenici: Array<Ucenik>;
    public predmet: Predmet;

    constructor()
    {
    }
}