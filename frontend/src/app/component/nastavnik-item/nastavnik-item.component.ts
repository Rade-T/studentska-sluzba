import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Nastavnik } from '../../model/nastavnik.model';
import { NastavnikService } from '../../service/nastavnik.service';

@Component({
  selector: 'tr[app-nastavnik-item]',
  templateUrl: './nastavnik-item.component.html',
  styleUrls: ['./nastavnik-item.component.css']
})
export class NastavnikItemComponent implements OnInit {

  @Input() nastavnik: Nastavnik;
	@Input() index: number;
  @Output() deleteNastavnikIndex: EventEmitter<number> = new EventEmitter();
  @Output() editNastavnikIndex: EventEmitter<Nastavnik> = new EventEmitter();

  constructor(private nastavnikService: NastavnikService) { }

  ngOnInit() {
  }

  deleteNastavnik(id: number) {
  	this.deleteNastavnikIndex.next(id);
  }

  editNastavnik(n: Nastavnik) {
    //this.nastavnikService.getNastavnik(id).subscribe((nastavnik: Nastavnik) => this.nastavnikEdit = nastavnik);
    this.editNastavnikIndex.next(n);
    console.log("Kliknut nastavnik");
  }
}
