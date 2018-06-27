import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { Ucenik } from '../../model/ucenik.model';
import { UcenikService } from '../../service/ucenik.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AddUcenikComponent } from '../add-ucenik/add-ucenik.component';

@Component({
  selector: 'app-ucenik',
  templateUrl: './ucenik.component.html',
  styleUrls: ['./ucenik.component.css']
})
export class UcenikComponent implements OnInit {

  @Output() deleteUcenikIndex: EventEmitter<number> = new EventEmitter();
  @Output() showAddUcenikEvent: EventEmitter<boolean> = new EventEmitter();
  @ViewChild(AddUcenikComponent) addUcenikComponent: AddUcenikComponent;
  @Input() ucenici: Ucenik[];

  public _ucenici: Ucenik[];
  public newUcenik: Ucenik;
  public addUcenikVisible: boolean = false;

  constructor(private ucenikService: UcenikService) {
    this.ucenici = [];
    this.loadData();
  }

  ngOnInit() {
  }

  private loadData() {
    this.ucenikService.getUcenici().subscribe((ucenici: Ucenik[]) => this.ucenici = ucenici);
  }

  save(newUcenik: Ucenik){
    this.ucenikService.saveUcenik(newUcenik).subscribe(
      () => {
        this.loadData();
      }
    );
    this.addUcenikVisible = false;
  }

  delete(id: number){
    this.ucenikService.deleteUcenik(id).subscribe(
      () => {
        this.loadData();
      }
    );
  }

  toggleAddUcenik(show: boolean) {
    console.log("Primljen dogadjaj");
    this.addUcenikVisible = show;
  }

  // delete(index: number) {
  //   this.deleteUcenikIndex.next(index);
  // }

  showAddUcenik() {
    console.log("Poslat event");
    //this.showAddUcenikEvent.next(true);
    this.addUcenikVisible = true;
  }
}
