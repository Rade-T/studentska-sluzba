import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PredavanjeService } from '../../service/predavanje.service';
import { Predavanje } from '../../model/predavanje.model';

@Component({
  selector: 'tr[app-predavanje-item]',
  templateUrl: './predavanje-item.component.html',
  styleUrls: ['./predavanje-item.component.css']
})
export class PredavanjeItemComponent implements OnInit {

  @Input() predavanje: Predavanje;
	@Input() index: number;
  @Output() deletePredavanjeIndex: EventEmitter<number> = new EventEmitter();
  @Output() editPredavanjeIndex: EventEmitter<Predavanje> = new EventEmitter();
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  deletePredavanje(id:number){
  	this.deletePredavanjeIndex.next(id);
  }

  editPredavanje(p: Predavanje) {
    this.editPredavanjeIndex.next(p);
  }

}
