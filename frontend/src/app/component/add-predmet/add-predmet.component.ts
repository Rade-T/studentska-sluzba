import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Predmet } from '../../model/predmet.model';
import { HttpClient } from '@angular/common/http';
import { NastavnikService } from '../../service/nastavnik.service';
import { PredmetService } from '../../service/predmet.service';
import { UcenikService } from '../../service/ucenik.service';
import { Nastavnik } from '../../model/nastavnik.model';
import { Ucenik } from '../../model/ucenik.model';
import { PolaganjeService } from '../../service/polaganje.service';
import { PredavanjeService } from '../../service/predavanje.service';
import { Predavanje } from '../../model/predavanje.model';
import { Polaganje } from '../../model/polaganje.model';

@Component({
  selector: 'app-add-predmet',
  templateUrl: './add-predmet.component.html',
  styleUrls: ['./add-predmet.component.css']
})
export class AddPredmetComponent implements OnInit {

  @Output() newPredmetAdded: EventEmitter<Predmet> = new EventEmitter();

  public newPredmet: Predmet;
  public JSON: Object;

  constructor(private http: HttpClient) { 
    this.newPredmet = new Predmet();
    this.JSON = JSON;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
  }

  addPredmet() {
    this.newPredmetAdded.next(this.newPredmet);
    this.newPredmet = new Predmet();
    console.log("Poslat dogadjaj");
  }

}
