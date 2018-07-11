import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uplata } from '../../model/uplata.model';
import { UcenikService } from '../../service/ucenik.service';
import { Ucenik } from '../../model/ucenik.model';

@Component({
  selector: 'app-add-uplata',
  templateUrl: './add-uplata.component.html',
  styleUrls: ['./add-uplata.component.css']
})
export class AddUplataComponent implements OnInit {

  @Output() newUplataAdded: EventEmitter<Uplata> = new EventEmitter();

  public newUplata: Uplata;
  public JSON: Object;
  public ucenici: Ucenik[];

  constructor(private http: HttpClient, private ucenikService: UcenikService) { 
    this.newUplata = new Uplata();
    this.JSON = JSON;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.ucenikService.getUcenici().subscribe((ucenici: Ucenik[]) => this.ucenici = ucenici);
  }

  addUplata() {
    this.newUplataAdded.next(this.newUplata);
    this.newUplata = new Uplata();
  }
}
