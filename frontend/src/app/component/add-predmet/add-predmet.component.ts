import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Predmet } from '../../model/predmet.model';
import { HttpClient } from '@angular/common/http';

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
  }

  addPredmet() {
    this.newPredmetAdded.next(this.newPredmet);
    this.newPredmet = new Predmet();
    console.log("Poslat dogadjaj");
  }

}
