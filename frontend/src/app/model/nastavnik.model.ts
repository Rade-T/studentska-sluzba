import { Predavanje } from './predavanje.model';

export class Nastavnik {
        public id: number;
        public ime: string;
        public prezime: string;
        public jmbg: string;
        public email: string;
        public telefon: string;
        public predavanja: Array<Predavanje>;

        constructor() {
            
        }
}
