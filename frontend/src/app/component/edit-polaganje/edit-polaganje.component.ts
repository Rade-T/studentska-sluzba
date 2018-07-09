import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Polaganje } from '../../model/polaganje.model';
import { Ucenik } from '../../model/ucenik.model';
import { Predmet } from '../../model/predmet.model';
import { UcenikService } from '../../service/ucenik.service';
import { PredmetService } from '../../service/predmet.service';

@Component({
  selector: 'app-edit-polaganje',
  templateUrl: './edit-polaganje.component.html',
  styleUrls: ['./edit-polaganje.component.css']
})
export class EditPolaganjeComponent implements OnInit {
  @Output() editPolaganjeSaved: EventEmitter<Polaganje> = new EventEmitter();

  public editPolaganje: Polaganje;
  public JSON: Object;
  public ucenici: Ucenik[];
  public predmeti: Predmet[];

  constructor(private http: HttpClient, private ucenikService: UcenikService, private predmetService: PredmetService) { 
    this.editPolaganje = new Polaganje();
    this.JSON = JSON;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.predmetService.getPredmeti().subscribe((predmeti: Predmet[]) => this.predmeti = predmeti);
    this.ucenikService.getUcenici().subscribe((ucenici: Ucenik[]) => this.ucenici = ucenici);
  }

  public printPolaganje() {
    console.log(this.editPolaganje);
  }

  savePolaganje() {
    this.editPolaganjeSaved.next(this.editPolaganje);
    this.editPolaganje = new Polaganje();
  }

  setPolaganje(polaganje: Polaganje) {
    this.editPolaganje = polaganje;
    console.log("Setovano polaganje");
    console.log(this.editPolaganje);
  }
}
