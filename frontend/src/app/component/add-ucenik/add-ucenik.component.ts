import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ucenik } from '../../model/ucenik.model';

@Component({
  selector: 'app-add-ucenik',
  templateUrl: './add-ucenik.component.html',
  styleUrls: ['./add-ucenik.component.css']
})
export class AddUcenikComponent implements OnInit {

  @Output() newUcenikAdded: EventEmitter<Ucenik> = new EventEmitter();

  public newUcenik: Ucenik;
  public JSON: Object;

  constructor(private http: HttpClient) { 
    this.newUcenik = new Ucenik();
    this.JSON = JSON;
  }

  ngOnInit() {
  }

  addUcenik() {
    console.log(this.newUcenik);
    this.newUcenikAdded.next(this.newUcenik);
    this.newUcenik = new Ucenik();
  }

}
