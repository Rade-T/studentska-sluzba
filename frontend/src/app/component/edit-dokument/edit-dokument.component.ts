import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Dokument } from '../../model/dokument.model';
import { HttpClient } from '@angular/common/http';
import { UcenikService } from '../../service/ucenik.service';
import { Ucenik } from '../../model/ucenik.model';

@Component({
  selector: 'app-edit-dokument',
  templateUrl: './edit-dokument.component.html',
  styleUrls: ['./edit-dokument.component.css']
})
export class EditDokumentComponent implements OnInit {

  @Output() editDokumentSaved: EventEmitter<Dokument> = new EventEmitter();

  public editDokument: Dokument;
  public JSON: Object;
  public ucenici: Ucenik[];

  constructor(private http: HttpClient, private ucenikService: UcenikService) {
    this.editDokument = new Dokument();
    this.JSON = JSON;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.ucenikService.getUcenici().subscribe((ucenici: Ucenik[]) => this.ucenici = ucenici);
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
