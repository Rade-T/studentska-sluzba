import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Predmet } from '../../model/predmet.model';
import { PredmetService } from '../../service/predmet.service';
import { AddPredmetComponent } from '../add-predmet/add-predmet.component';
import { EditPredmetComponent } from '../edit-predmet/edit-predmet.component';

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent implements OnInit {

  @Output() deletePredmetkIndex: EventEmitter<number> = new EventEmitter();
  @Output() showAddPredmetEvent: EventEmitter<boolean> = new EventEmitter();
  @ViewChild(AddPredmetComponent) addPredmetComponent: AddPredmetComponent;
  @Input() predmet: Predmet[];
  @ViewChild(EditPredmetComponent) editPredmetComponent: EditPredmetComponent;

  public _predmet: Predmet[];
  public newPredmet: Predmet;
  public editPredmet: Predmet;
  public addPredmetVisible: boolean = false;

  constructor(private predmetService: PredmetService) {
    this.predmet = [];
    this.loadData();
  }

  ngOnInit() {
  }

  private loadData() {
    this.predmetService.getPredmeti().subscribe((predmet: Predmet[]) => this.predmet = predmet);
  }

  save(newPredmet: Predmet){
    this.predmetService.savePredmet(newPredmet).subscribe(
      () => {
        this.loadData();
      }
    );
    this.addPredmetVisible = false;
  }

  delete(id: number){
    this.predmetService.deletePredmet(id).subscribe(
      () => {
        this.loadData();
      }
    );
  }

  toggleAddPredmet(show: boolean) {
    console.log("Primljen dogadjaj");
    this.addPredmetVisible = show;
  }

  showAddPredmet() {
    console.log("Poslat event");
    this.addPredmetVisible = true;
  }

  setPredmet(predmet: Predmet) {
    this.editPredmetComponent.editPredmet = predmet;
  }

  saveEdit(editPredmet: Predmet) {
    this.predmetService.editPredmet(editPredmet).subscribe(
      () => {
        this.loadData();
      }
    );
  }

}
