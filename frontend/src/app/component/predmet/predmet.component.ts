import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Predmet } from '../../model/predmet.model';
import { PredmetService } from '../../service/predmet.service';

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent implements OnInit {

  @Output() deletePredmetIndex: EventEmitter<number> = new EventEmitter();

  @Input() predmeti: Predmet[];

  constructor(private predmetService: PredmetService) { }

  public _predmeti: Predmet[];
  public newNastavnik: Predmet;

  ngOnInit() {
    this.predmetService.getPredmeti();
    this._predmeti = [];
    this.loadPredmetData();
  }

  delete(index: number) {
    this.deletePredmetIndex.next(index);
  }

  loadPredmetData() {
    console.log("Ucitani nastavnici");
    this.predmetService.getPredmeti().subscribe((predmeti: Predmet[]) => this._predmeti = predmeti);
  }

  save(newPredmet: Predmet){
    console.log("Primljen dogadjaj");
    this.predmetService.savePredmet(newPredmet).subscribe(
      () => {
        this.loadPredmetData();
      }
    );
    //this.addUcenikVisible = false;
  }

}
