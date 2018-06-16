import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UcenikService } from '../../service/ucenik.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Nastavnik } from '../../model/nastavnik.model';

@Component({
  selector: 'app-nastavnik',
  templateUrl: './nastavnik.component.html',
  styleUrls: ['./nastavnik.component.css']
})
export class NastavnikComponent implements OnInit {

  @Output() deleteNastavnikIndex: EventEmitter<number> = new EventEmitter();

  @Input() nastavnici: Nastavnik[];

  constructor() { }

  ngOnInit() {
  }

  delete(index: number) {
    this.deleteNastavnikIndex.next(index);
  }

}
