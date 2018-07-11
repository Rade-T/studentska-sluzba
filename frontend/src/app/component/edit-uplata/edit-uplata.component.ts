import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uplata } from '../../model/uplata.model';
import { UcenikService } from '../../service/ucenik.service';
import { Ucenik } from '../../model/ucenik.model';

@Component({
  selector: 'app-edit-uplata',
  templateUrl: './edit-uplata.component.html',
  styleUrls: ['./edit-uplata.component.css']
})
export class EditUplataComponent implements OnInit {
  @Output() editUplataSaved: EventEmitter<Uplata> = new EventEmitter();

  public editUplata: Uplata;
  public JSON: Object;
  public ucenici: Ucenik[];

  constructor(private http: HttpClient, private ucenikService: UcenikService) { 
    this.editUplata = new Uplata();
    this.JSON = JSON;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.ucenikService.getUcenici().subscribe((ucenici: Ucenik[]) => this.ucenici = ucenici);
  }

  public printUplata() {
    console.log(this.editUplata);
  }

  saveUplata() {
    this.editUplataSaved.next(this.editUplata);
    this.editUplata = new Uplata();
  }

  setUplata(uplata: Uplata) {
    this.editUplata = uplata;
    console.log("Setovano uplata");
    console.log(this.editUplata);
  }
}
