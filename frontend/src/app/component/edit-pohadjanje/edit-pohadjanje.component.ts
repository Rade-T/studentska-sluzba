import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pohadjanje } from '../../model/pohadjanje.model';
import { HttpClient } from '@angular/common/http';
import { PredmetService } from '../../service/predmet.service';
import { Predmet } from '../../model/predmet.model';

@Component({
  selector: 'app-edit-pohadjanje',
  templateUrl: './edit-pohadjanje.component.html',
  styleUrls: ['./edit-pohadjanje.component.css']
})
export class EditPohadjanjeComponent implements OnInit {
  @Output() editPohadjanjeSaved: EventEmitter<Pohadjanje> = new EventEmitter();

  public editPohadjanje: Pohadjanje;
  public JSON: Object;
  public predmeti: Predmet[];

  constructor(private http: HttpClient, private predmetService: PredmetService) { 
    this.editPohadjanje = new Pohadjanje();
    this.JSON = JSON;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.predmetService.getPredmeti().subscribe((predmeti: Predmet[]) => this.predmeti = predmeti);
  }

  public printPohadjanje() {
    console.log(this.editPohadjanje);
  }

  savePohadjanje() {
    this.editPohadjanjeSaved.next(this.editPohadjanje);
    this.editPohadjanje = new Pohadjanje();
  }

  setPohadjanje(pohadjanje: Pohadjanje) {
    this.editPohadjanje = pohadjanje;
    console.log("Setovano pohadjanje");
    console.log(this.editPohadjanje);
  }
}
