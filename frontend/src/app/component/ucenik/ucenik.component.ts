import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Ucenik } from '../../model/ucenik.model';
import { UcenikService } from '../../service/ucenik.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ucenik',
  templateUrl: './ucenik.component.html',
  styleUrls: ['./ucenik.component.css']
})
export class UcenikComponent implements OnInit {

  @Output() deleteUcenikIndex: EventEmitter<number> = new EventEmitter();
  @Output() showAddUcenikEvent: EventEmitter<boolean> = new EventEmitter();

  @Input() ucenici: Ucenik[];

  constructor() {
  }

  ngOnInit() {
  }

  delete(index: number) {
    this.deleteUcenikIndex.next(index);
  }

  showAddUcenik() {
    console.log("Poslat event");
    this.showAddUcenikEvent.next(true);
  }
}
