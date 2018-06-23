import { Polaganje } from "./polaganje.model";
import { Predavanje } from "./predavanje.model";

export class Predmet {
    public id: number;
    public naziv: string;
    public polaganja: Array<Polaganje>;
    public predavanja: Array<Predavanje>;

    constructor()
    {
    }
}