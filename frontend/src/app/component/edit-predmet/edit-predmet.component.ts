import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Predmet } from '../../model/predmet.model';
import { PolaganjeComponent } from '../polaganje/polaganje.component';
import { Polaganje } from '../../model/polaganje.model';
import { Predavanje } from '../../model/predavanje.model';
import { PolaganjeService } from '../../service/polaganje.service';
import { PredavanjeService } from '../../service/predavanje.service';

@Component({
  selector: 'app-edit-predmet',
  templateUrl: './edit-predmet.component.html',
  styleUrls: ['./edit-predmet.component.css']
})
export class EditPredmetComponent implements OnInit {
  @Output() editPredmetSaved: EventEmitter<Predmet> = new EventEmitter();

  public editPredmet: Predmet;
  public JSON: Object;
  public predavanja: Predavanje[];
  public polaganja: Polaganje[];

  constructor(private http: HttpClient, private polaganjeService: PolaganjeService, private predavanjeService: PredavanjeService) { 
    this.editPredmet = new Predmet();
    this.JSON = JSON;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.polaganjeService.getPolaganja().subscribe((polaganja: Polaganje[]) => this.polaganja = polaganja);
    this.predavanjeService.getPredavanja().subscribe((predavanja: Predavanje[]) => this.predavanja = predavanja);
  }


  public printPredmet() {
    console.log(this.editPredmet);
  }

  savePredmet() {
    this.editPredmetSaved.next(this.editPredmet);
    this.editPredmet = new Predmet();
  }

  setPredmet(predmet: Predmet) {
    this.editPredmet = predmet;
    console.log("Setovan predmet");
    console.log(this.editPredmet);
  }
}
