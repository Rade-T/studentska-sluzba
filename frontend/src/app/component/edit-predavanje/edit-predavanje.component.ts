import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Predavanje } from '../../model/predavanje.model';
import { PredmetService } from '../../service/predmet.service';
import { Nastavnik } from '../../model/nastavnik.model';
import { Predmet } from '../../model/predmet.model';
import { NastavnikService } from '../../service/nastavnik.service';

@Component({
  selector: 'app-edit-predavanje',
  templateUrl: './edit-predavanje.component.html',
  styleUrls: ['./edit-predavanje.component.css']
})
export class EditPredavanjeComponent implements OnInit {
  @Output() editPredavanjeSaved: EventEmitter<Predavanje> = new EventEmitter();

  public editPredavanje: Predavanje;
  public JSON: Object;
  public predmeti: Predmet[];
  public nastavnici: Nastavnik[];

  constructor(private http: HttpClient, private predmetService: PredmetService,private nastavnikService: NastavnikService) { 
    this.editPredavanje = new Predavanje();
    this.JSON = JSON;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.predmetService.getPredmeti().subscribe((predmeti: Predmet[]) => this.predmeti = predmeti);
    this.nastavnikService.getNastavnici().subscribe((nastavnici: Nastavnik[]) => this.nastavnici = nastavnici)
  }

  public printPredavanje() {
    console.log(this.editPredavanje);
  }

  savePredavanje() {
    this.editPredavanjeSaved.next(this.editPredavanje);
    this.editPredavanje = new Predavanje();
  }

  setPredavanje(predavanje: Predavanje) {
    this.editPredavanje = predavanje;
    console.log("Setovano predavanje");
    console.log(this.editPredavanje);
  }
}
