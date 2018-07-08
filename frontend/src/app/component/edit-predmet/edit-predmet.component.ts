import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Predmet } from '../../model/predmet.model';

@Component({
  selector: 'app-edit-predmet',
  templateUrl: './edit-predmet.component.html',
  styleUrls: ['./edit-predmet.component.css']
})
export class EditPredmetComponent implements OnInit {
  @Output() editPredmetSaved: EventEmitter<Predmet> = new EventEmitter();

  public editPredmet: Predmet;
  public JSON: Object;

  constructor(private http: HttpClient) { 
    this.editPredmet = new Predmet();
    this.JSON = JSON;
  }

  ngOnInit() {
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
