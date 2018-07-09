import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Polaganje } from '../../model/polaganje.model';
import { Ucenik } from '../../model/ucenik.model';
import { UcenikService } from '../../service/ucenik.service';
import { PredmetService } from '../../service/predmet.service';
import { Predmet } from '../../model/predmet.model';

@Component({
  selector: 'app-add-polaganje',
  templateUrl: './add-polaganje.component.html',
  styleUrls: ['./add-polaganje.component.css']
})
export class AddPolaganjeComponent implements OnInit {

  @Output() newPolaganjeAdded: EventEmitter<Polaganje> = new EventEmitter();

  public newPolaganje: Polaganje;
  public JSON: Object;
  public ucenici: Ucenik[];
  public predmeti: Predmet[];

  constructor(private http: HttpClient, private ucenikService: UcenikService, private predmetService: PredmetService) { 
    this.newPolaganje = new Polaganje();
    this.JSON = JSON;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.ucenikService.getUcenici().subscribe((ucenici: Ucenik[]) => this.ucenici = ucenici);
    this.predmetService.getPredmeti().subscribe((predmeti: Predmet[]) => this.predmeti = predmeti);
  }

  addPolaganje() {
    this.newPolaganjeAdded.next(this.newPolaganje);
    this.newPolaganje = new Polaganje();
  }

}
