import { Ucenik } from "./ucenik.model";
import { Predmet } from "./predmet.model";

export class Pohadjanje {

    public id: number;
    public ucenici: Array<number>;
    public predmet: Predmet;

    constructor()
    {
    }
}