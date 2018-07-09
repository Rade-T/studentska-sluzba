import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Dokument } from '../../model/dokument.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-dokument',
  templateUrl: './edit-dokument.component.html',
  styleUrls: ['./edit-dokument.component.css']
})
export class EditDokumentComponent implements OnInit {

  @Output() editDokumentSaved: EventEmitter<Dokument> = new EventEmitter();

  public editDokument: Dokument;
  public JSON: Object;

  constructor(private http: HttpClient) {
    this.editDokument = new Dokument();
    this.JSON = JSON;
  }

  ngOnInit() {
  }

  saveDokument() {
    this.editDokumentSaved.next(this.editDokument);
    this.editDokument = new Dokument();
  }

  setDokument(dokument: Dokument) {
    this.editDokument = dokument;
    console.log("Setovan dokument");
    console.log(this.editDokument);
  }
}
