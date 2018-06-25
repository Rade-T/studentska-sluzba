import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Nastavnik } from '../../model/nastavnik.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-nastavnik',
  templateUrl: './edit-nastavnik.component.html',
  styleUrls: ['./edit-nastavnik.component.css']
})
export class EditNastavnikComponent implements OnInit {

  @Output() editNastavnikSaved: EventEmitter<Nastavnik> = new EventEmitter();

  public editNastavnik: Nastavnik;
  public JSON: Object;

  constructor(private http: HttpClient) { 
    this.editNastavnik = new Nastavnik();
    this.JSON = JSON;
  }

  ngOnInit() {
  }

  public printNastavnik() {
    console.log(this.editNastavnik);
  }

  saveNastavnik() {
    this.editNastavnikSaved.next(this.editNastavnik);
    this.editNastavnik = new Nastavnik();
  }

  setNastavnik(nastavnik: Nastavnik) {
    this.editNastavnik = nastavnik;
    console.log("Setovan nastavnik");
    console.log(this.editNastavnik);
  }
}
