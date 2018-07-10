import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { Pohadjanje } from '../../model/pohadjanje.model';
import { EditPohadjanjeComponent } from '../edit-pohadjanje/edit-pohadjanje.component';
import { PohadjanjeService } from '../../service/pohadjanje.service';
import { Ucenik } from '../../model/ucenik.model';
import { UcenikService } from '../../service/ucenik.service';

@Component({
  selector: 'app-pohadjanja',
  templateUrl: './pohadjanja.component.html',
  styleUrls: ['./pohadjanja.component.css']
})
export class PohadjanjaComponent implements OnInit {

  @Output() deletePohadjanjeIndex: EventEmitter<number> = new EventEmitter();
  @Output() editPohadjanjeEvent: EventEmitter<Pohadjanje> = new EventEmitter();
  @Input() pohadjanja: Pohadjanje[];
  @ViewChild(EditPohadjanjeComponent) editPohadjanjeComponent: EditPohadjanjeComponent;

  constructor(private pohadjanjeService: PohadjanjeService) { }

  public _pohadjanja: Pohadjanje[];
  public newPohadjanje: Pohadjanje;
  public editPohadjanje: Pohadjanje;
  public addPohadjanjeVisible: boolean = false;
  public editPohadjanjeVisible: boolean = false;

  ngOnInit() {
    this.pohadjanjeService.getPohadjanja();
    this._pohadjanja = [];
    this.loadPohadjanjeData();
  }

  delete(index: number) {
    this.pohadjanjeService.deletePohadjanje(index).subscribe(
      () => {
        this.loadPohadjanjeData();
      }
    );
  }

  loadPohadjanjeData() {
    this.pohadjanjeService.getPohadjanja().subscribe((pohadjanja: Pohadjanje[]) => this._pohadjanja = pohadjanja);
  }

  setPohadjanje(pohadjanje: Pohadjanje) {
    this.editPohadjanjeComponent.editPohadjanje = pohadjanje;
    console.log(pohadjanje);
    for (let ucenikId of pohadjanje.ucenici) {
      var editUceniciTable = (<HTMLTableElement>document.getElementById("editUceniciTable"));
      
      for (var i = 1, row; row = editUceniciTable.rows[i]; i++) {
        console.log(row);
        if (row.cells[0].innerHTML == ucenikId) {          
          row.cells[4].children[0].checked = true;
        }
      }
    }
  }

  save(newPohadjanje: Pohadjanje) {
    this.pohadjanjeService.savePohadjanje(newPohadjanje).subscribe(
      () => {
        this.loadPohadjanjeData();
      }
    );
    this.addPohadjanjeVisible = false;
  }

  saveEdit(editPohadjanje: Pohadjanje) {
    this.pohadjanjeService.editPohadjanje(editPohadjanje).subscribe(
      () => {
        this.loadPohadjanjeData();
      }
    );
  }

  toggleAddPohadjanje(show: boolean) {
    this.addPohadjanjeVisible = show;
  }

  showAddPohadjanje() {
    this.addPohadjanjeVisible = true;
  }

}
