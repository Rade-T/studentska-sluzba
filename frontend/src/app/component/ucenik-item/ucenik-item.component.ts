import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ucenik } from '../../model/ucenik.model';
import { Router } from '@angular/router';

@Component({
  selector: 'tr[app-ucenik-item]',
  templateUrl: './ucenik-item.component.html',
  styleUrls: ['./ucenik-item.component.css']
})
export class UcenikItemComponent implements OnInit {

  @Input() ucenik: Ucenik;
	@Input() index: number;
  @Output() deleteUcenikIndex: EventEmitter<number> = new EventEmitter();
  @Output() editUcenikIndex: EventEmitter<Ucenik> = new EventEmitter();
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  deleteUcenik(id:number){
  	this.deleteUcenikIndex.next(id);
  }

  editUcenik(u: Ucenik) {
    this.editUcenikIndex.next(u);
  }
}
