import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { UcenikService } from '../../service/ucenik.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Nastavnik } from '../../model/nastavnik.model';
import { NastavnikService } from '../../service/nastavnik.service';
import { EditNastavnikComponent } from '../edit-nastavnik/edit-nastavnik.component';

@Component({
  selector: 'app-nastavnik',
  templateUrl: './nastavnik.component.html',
  styleUrls: ['./nastavnik.component.css']
})
export class NastavnikComponent implements OnInit {

  @Output() deleteNastavnikIndex: EventEmitter<number> = new EventEmitter();
  @Output() editNastavnikEvent: EventEmitter<Nastavnik> = new EventEmitter();
  @Input() nastavnici: Nastavnik[];
  @ViewChild(EditNastavnikComponent) editNastavnikComponent: EditNastavnikComponent;

  constructor(private nastavnikService: NastavnikService) { }

  public _nastavnici: Nastavnik[];
  public newNastavnik: Nastavnik;
  public editNastavnik: Nastavnik;
  public addNastavnikVisible: boolean = false;
  public editNastavnikVisible: boolean = false;

  ngOnInit() {
    this.nastavnikService.getNastavnici();
    this._nastavnici = [];
    this.loadNastavnikData();
  }

  delete(index: number) {
    this.nastavnikService.deleteNastavnik(index).subscribe(
      () => {
        this.loadNastavnikData();
      }
    );
  }

  loadNastavnikData() {
    this.nastavnikService.getNastavnici().subscribe((nastavnici: Nastavnik[]) => this._nastavnici = nastavnici);
  }

  setNastavnik(nastavnik: Nastavnik) {
    this.editNastavnikComponent.editNastavnik = nastavnik;
  }

  save(newNastavnik: Nastavnik) {
    this.nastavnikService.saveNastavnik(newNastavnik).subscribe(
      () => {
        this.loadNastavnikData();
      }
    );
    this.addNastavnikVisible = false;
  }

  saveEdit(editNastavnik: Nastavnik) {
    this.nastavnikService.editNastavnik(editNastavnik).subscribe(
      () => {
        this.loadNastavnikData();
      }
    );
  }

  toggleAddNastavnik(show: boolean) {
    this.addNastavnikVisible = show;
  }

  showAddNastavnik() {
    this.addNastavnikVisible = true;
  }
}
