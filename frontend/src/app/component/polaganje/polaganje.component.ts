import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Polaganje } from '../../model/polaganje.model';
import { PolaganjeService } from '../../service/polaganje.service';
import { AddPolaganjeComponent } from '../add-polaganje/add-polaganje.component';
import { EditPolaganjeComponent } from '../edit-polaganje/edit-polaganje.component';


@Component({
  selector: 'app-polaganje',
  templateUrl: './polaganje.component.html',
  styleUrls: ['./polaganje.component.css']
})
export class PolaganjeComponent implements OnInit {

  @Output() deletePolaganjekIndex: EventEmitter<number> = new EventEmitter();
  @Output() showAddPolaganjeEvent: EventEmitter<boolean> = new EventEmitter();
  @ViewChild(AddPolaganjeComponent) addPolaganjeComponent: AddPolaganjeComponent;
  @Input() polaganje: Polaganje[];
  @ViewChild(EditPolaganjeComponent) editPolaganjeComponent: EditPolaganjeComponent;

  public _polaganje: Polaganje[];
  public newPolaganje: Polaganje;
  public editPolaganje: Polaganje;
  public addPolaganjeVisible: boolean = false;

  constructor(private polaganjeService: PolaganjeService) {
    this.polaganje = [];
    this.loadData();
  }

  ngOnInit() {
  }

  private loadData() {
    this.polaganjeService.getPolaganja().subscribe((polaganje: Polaganje[]) => this.polaganje = polaganje);
  }

  save(newPolaganje: Polaganje){
    this.polaganjeService.savePolaganje(newPolaganje).subscribe(
      () => {
        this.loadData();
      }
    );
    this.addPolaganjeVisible = false;
  }

  delete(id: number){
    this.polaganjeService.deletePolaganje(id).subscribe(
      () => {
        this.loadData();
      }
    );
  }

  toggleAddPolaganje(show: boolean) {
    console.log("Primljen dogadjaj");
    this.addPolaganjeVisible = show;
  }

  showAddPolaganje() {
    console.log("Poslat event");
    this.addPolaganjeVisible = true;
  }

  setPolaganje(polaganje: Polaganje) {
    this.editPolaganjeComponent.editPolaganje = polaganje;
  }

  saveEdit(editPolaganje: Polaganje) {
    this.polaganjeService.editPolaganje(editPolaganje).subscribe(
      () => {
        this.loadData();
      }
    );
  }

}