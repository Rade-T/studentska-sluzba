import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pohadjanje } from '../../model/pohadjanje.model';
import { HttpClient } from '@angular/common/http';
import { PredmetService } from '../../service/predmet.service';
import { Predmet } from '../../model/predmet.model';
import { Ucenik } from '../../model/ucenik.model';
import { UcenikService } from '../../service/ucenik.service';

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
  public ucenici: Ucenik[];
  public uceniciPohadjanja: number[];

  constructor(private http: HttpClient, private predmetService: PredmetService, private ucenikService: UcenikService) { 
    this.editPohadjanje = new Pohadjanje();
    this.JSON = JSON;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.predmetService.getPredmeti().subscribe((predmeti: Predmet[]) => this.predmeti = predmeti);
    this.ucenikService.getUcenici().subscribe((ucenici: Ucenik[]) => this.ucenici = ucenici);
  }

  public printPohadjanje() {
    console.log(this.editPohadjanje);
  }

  savePohadjanje() {
    this.uceniciPohadjanja = new Array<number>();
    var addUceniciTable = (<HTMLTableElement>document.getElementById("editUceniciTable"));
    this.editPohadjanje.ucenici = new Array<number>();
    for (var i = 1, row; row = addUceniciTable.rows[i];i++) {
      if (row.cells[4].children[0].checked) {
        this.editPohadjanje.ucenici.push(row.cells[0].innerHTML);
      }
    }
    console.log(this.editPohadjanje);
    this.editPohadjanjeSaved.next(this.editPohadjanje);
    this.editPohadjanje = new Pohadjanje();
  }

  setPohadjanje(pohadjanje: Pohadjanje) {
    this.editPohadjanje = pohadjanje;
    console.log("Setovano pohadjanje");
    console.log(this.editPohadjanje);
  }
}
