import { Osoba } from "./osoba.model";
import { Predavanje } from "./predavanje.model";

export class Nastavnik extends Osoba {
        public id: number;
        public ime: string;
        public prezime: string;
        public JMBG: string;
        public email: string;
        public telefon: string;
        public predavanja: Array<Predavanje>;
            
        constructor()
        {
            super();
        }
}