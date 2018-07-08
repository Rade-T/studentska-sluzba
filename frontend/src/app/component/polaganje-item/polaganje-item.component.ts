import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Polaganje } from '../../model/polaganje.model';

@Component({
  selector: 'tr[app-polaganje-item]',
  templateUrl: './polaganje-item.component.html',
  styleUrls: ['./polaganje-item.component.css']
})
export class PolaganjeItemComponent implements OnInit {

  @Input() polaganje: Polaganje;
	@Input() index: number;
  @Output() deletePolaganjeIndex: EventEmitter<number> = new EventEmitter();
  @Output() editPolaganjeIndex: EventEmitter<Polaganje> = new EventEmitter();
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  deletePolaganje(id:number){
  	this.deletePolaganjeIndex.next(id);
  }

  editPolaganje(p: Polaganje) {
    this.editPolaganjeIndex.next(p);
  }

}
