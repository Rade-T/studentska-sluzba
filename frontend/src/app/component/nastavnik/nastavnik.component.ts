import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UcenikService } from '../../service/ucenik.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Nastavnik } from '../../model/nastavnik.model';
import { NastavnikService } from '../../service/nastavnik.service';

@Component({
  selector: 'app-nastavnik',
  templateUrl: './nastavnik.component.html',
  styleUrls: ['./nastavnik.component.css']
})
export class NastavnikComponent implements OnInit {

  @Output() deleteNastavnikIndex: EventEmitter<number> = new EventEmitter();

  @Input() nastavnici: Nastavnik[];

  constructor(private nastavnikService: NastavnikService) { }

  public _nastavnici: Nastavnik[];
  public newNastavnik: Nastavnik;

  ngOnInit() {
    this.nastavnikService.getNastavnici();
    this._nastavnici = [];
    this.loadNastavnikData();
  }

  delete(index: number) {
    this.deleteNastavnikIndex.next(index);
  }

  loadNastavnikData() {

  }

  save(newNastavnik: Nastavnik){
    this.nastavnikService.saveNastavnik(newNastavnik).subscribe(
      () => {
        this.loadNastavnikData();
      }
    );
    //this.addUcenikVisible = false;
  }
}
