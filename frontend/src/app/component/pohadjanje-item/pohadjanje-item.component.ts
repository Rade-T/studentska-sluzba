import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pohadjanje } from '../../model/pohadjanje.model';

@Component({
  selector: 'tr[app-pohadjanje-item]',
  templateUrl: './pohadjanje-item.component.html',
  styleUrls: ['./pohadjanje-item.component.css']
})
export class PohadjanjeItemComponent implements OnInit {

  @Input() pohadjanje: Pohadjanje;
	@Input() index: number;
  @Output() deletePohadjanjeIndex: EventEmitter<number> = new EventEmitter();
  @Output() editPohadjanjeIndex: EventEmitter<Pohadjanje> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deletePohadjanje(id:number){
  	this.deletePohadjanjeIndex.next(id);
  }

  editPohadjanje(p: Pohadjanje) {
    this.editPohadjanjeIndex.next(p);
  }
}
