import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Nastavnik } from '../../model/nastavnik.model';

@Component({
  selector: 'tr[app-nastavnik-item]',
  templateUrl: './nastavnik-item.component.html',
  styleUrls: ['./nastavnik-item.component.css']
})
export class NastavnikItemComponent implements OnInit {

  @Input() nastavnik: Nastavnik;
	@Input() index: number;
  @Output() deleteNastavnikIndex: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteNastavnik(id:number){
  	this.deleteNastavnikIndex.next(id);
  }

}
