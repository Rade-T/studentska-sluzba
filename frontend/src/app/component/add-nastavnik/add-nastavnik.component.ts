import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Nastavnik } from '../../model/nastavnik.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-nastavnik',
  templateUrl: './add-nastavnik.component.html',
  styleUrls: ['./add-nastavnik.component.css']
})
export class AddNastavnikComponent implements OnInit {

  @Output() newNastavnikAdded: EventEmitter<Nastavnik> = new EventEmitter();

  public newNastavnik: Nastavnik;
  public JSON: Object;

  constructor(private http: HttpClient) { 
    this.newNastavnik = new Nastavnik();
    this.JSON = JSON;
  }

  ngOnInit() {
  }

  addNastavnik() {
    this.newNastavnikAdded.next(this.newNastavnik);
    this.newNastavnik = new Nastavnik();
    console.log("Poslat dogadjaj");
  }
}
