import { Osoba } from "./osoba.model";
import { Predavanje } from "./predavanje.model";

export class Nastavnik extends Osoba {
        public id: number;
        public predavanja: Array<Predavanje>;

            
        constructor()
        {
            super();
        }
}