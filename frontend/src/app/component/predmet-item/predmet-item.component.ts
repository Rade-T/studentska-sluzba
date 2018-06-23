import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Predmet } from '../../model/predmet.model';

@Component({
  selector: 'tr[app-predmet-item]',
  templateUrl: './predmet-item.component.html',
  styleUrls: ['./predmet-item.component.css']
})
export class PredmetItemComponent implements OnInit {

  @Input() predmet: Predmet;
	@Input() index: number;
  @Output() deletePredmetIndex: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deletePredmet(id:number){
  	this.deletePredmetIndex.next(id);
  }

}
