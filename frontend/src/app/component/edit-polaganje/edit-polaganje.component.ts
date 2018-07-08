import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Polaganje } from '../../model/polaganje.model';

@Component({
  selector: 'app-edit-polaganje',
  templateUrl: './edit-polaganje.component.html',
  styleUrls: ['./edit-polaganje.component.css']
})
export class EditPolaganjeComponent implements OnInit {
  @Output() editPolaganjeSaved: EventEmitter<Polaganje> = new EventEmitter();

  public editPolaganje: Polaganje;
  public JSON: Object;

  constructor(private http: HttpClient) { 
    this.editPolaganje = new Polaganje();
    this.JSON = JSON;
  }

  ngOnInit() {
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
