import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PredmetService } from '../../service/predmet.service';
import { Predmet } from '../../model/predmet.model';
import { Predavanje } from '../../model/predavanje.model';
import { Nastavnik } from '../../model/nastavnik.model';
import { NastavnikService } from '../../service/nastavnik.service';

@Component({
  selector: 'app-add-predavanje',
  templateUrl: './add-predavanje.component.html',
  styleUrls: ['./add-predavanje.component.css']
})
export class AddPredavanjeComponent implements OnInit {

  @Output() newPredavanjeAdded: EventEmitter<Predavanje> = new EventEmitter();

  public newPredavanje: Predavanje;
  public JSON: Object;
  public nastavnici: Nastavnik[];
  public predmeti: Predmet[];

  constructor(private http: HttpClient, private nastavnikService: NastavnikService, private predmetService: PredmetService) { 
    this.newPredavanje = new Predavanje();
    this.JSON = JSON;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.nastavnikService.getNastavnici().subscribe((nastavnici: Nastavnik[]) => this.nastavnici = nastavnici);
    this.predmetService.getPredmeti().subscribe((predmeti: Predmet[]) => this.predmeti = predmeti);
  }

  addPredavanje() {
    this.newPredavanjeAdded.next(this.newPredavanje);
    this.newPredavanje = new Predavanje();
  }
}
