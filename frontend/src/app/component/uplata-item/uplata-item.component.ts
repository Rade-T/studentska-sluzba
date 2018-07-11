import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Uplata } from '../../model/uplata.model';

@Component({
  selector: 'tr[app-uplata-item]',
  templateUrl: './uplata-item.component.html',
  styleUrls: ['./uplata-item.component.css']
})
export class UplataItemComponent implements OnInit {

  @Input() uplata: Uplata;
	@Input() index: number;
  @Output() deleteUplataIndex: EventEmitter<number> = new EventEmitter();
  @Output() editUplataIndex: EventEmitter<Uplata> = new EventEmitter();
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  deleteUplata(id:number){
  	this.deleteUplataIndex.next(id);
  }

  editUplata(u: Uplata) {
    this.editUplataIndex.next(u);
  }


}
