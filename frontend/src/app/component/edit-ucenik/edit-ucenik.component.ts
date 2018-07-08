import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ucenik } from '../../model/ucenik.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-ucenik',
  templateUrl: './edit-ucenik.component.html',
  styleUrls: ['./edit-ucenik.component.css']
})
export class EditUcenikComponent implements OnInit {

  @Output() editUcenikSaved: EventEmitter<Ucenik> = new EventEmitter();

  public editUcenik: Ucenik;
  public JSON: Object;

  constructor(private http: HttpClient) {
    this.editUcenik = new Ucenik();
    this.JSON = JSON;
  }

  ngOnInit() {
  }

  saveUcenik() {
    this.editUcenikSaved.next(this.editUcenik);
    this.editUcenik = new Ucenik();
  }

  setNastavnik(ucenik: Ucenik) {
    this.editUcenik = ucenik;
  }
}
