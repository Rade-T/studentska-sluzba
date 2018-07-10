import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pohadjanje } from '../../model/pohadjanje.model';
import { Ucenik } from '../../model/ucenik.model';
import { Predmet } from '../../model/predmet.model';
import { HttpClient } from '@angular/common/http';
import { UcenikService } from '../../service/ucenik.service';
import { PredmetService } from '../../service/predmet.service';

@Component({
  selector: 'app-add-pohadjanje',
  templateUrl: './add-pohadjanje.component.html',
  styleUrls: ['./add-pohadjanje.component.css']
})
export class AddPohadjanjeComponent implements OnInit {

  @Output() newPohadjanjeAdded: EventEmitter<Pohadjanje> = new EventEmitter();

  public newPohadjanje: Pohadjanje;
  public JSON: Object;
  public ucenici: Ucenik[];
  public predmeti: Predmet[];
  public uceniciPohadjanja: number[];

  constructor(private http: HttpClient, private ucenikService: UcenikService, private predmetService: PredmetService) { 
    this.newPohadjanje = new Pohadjanje();
    this.JSON = JSON;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.ucenikService.getUcenici().subscribe((ucenici: Ucenik[]) => this.ucenici = ucenici);
    this.predmetService.getPredmeti().subscribe((predmeti: Predmet[]) => this.predmeti = predmeti);
  }

  addPohadjanje() {
    this.uceniciPohadjanja = new Array<number>();
    var addUceniciTable = (<HTMLTableElement>document.getElementById("addUceniciTable"));
    this.newPohadjanje.ucenici = new Array<number>();
    for (var i = 1, row; row = addUceniciTable.rows[i];i++) {
      if (row.cells[4].children[0].checked) {
        this.newPohadjanje.ucenici.push(row.cells[0].innerHTML);
      }
    }
    console.log(this.newPohadjanje);
    //this.newPohadjanje.ucenici = this.uceniciPohadjanja;
    this.newPohadjanjeAdded.next(this.newPohadjanje);
    this.newPohadjanje = new Pohadjanje();
  }

}
