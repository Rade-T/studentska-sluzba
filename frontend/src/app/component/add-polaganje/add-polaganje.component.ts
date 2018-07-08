import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Polaganje } from '../../model/polaganje.model';

@Component({
  selector: 'app-add-polaganje',
  templateUrl: './add-polaganje.component.html',
  styleUrls: ['./add-polaganje.component.css']
})
export class AddPolaganjeComponent implements OnInit {

  @Output() newPolaganjeAdded: EventEmitter<Polaganje> = new EventEmitter();

  public newPolaganje: Polaganje;
  public JSON: Object;

  constructor(private http: HttpClient) { 
    this.newPolaganje = new Polaganje();
    this.JSON = JSON;
  }

  ngOnInit() {
  }

  addPolaganje() {
    this.newPolaganjeAdded.next(this.newPolaganje);
    this.newPolaganje = new Polaganje();
  }

}
