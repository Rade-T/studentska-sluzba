import { Component, OnInit, Output } from '@angular/core';
import { Dokument } from '../../model/dokument.model';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ucenik } from '../../model/ucenik.model';
import { UcenikService } from '../../service/ucenik.service';
import { DokumentService } from '../../service/dokument.service';

@Component({
  selector: 'app-add-dokument',
  templateUrl: './add-dokument.component.html',
  styleUrls: ['./add-dokument.component.css']
})
export class AddDokumentComponent implements OnInit {

  @Output() newDokumentAdded: EventEmitter<Dokument> = new EventEmitter();

  public newDokument: Dokument;
  public JSON: Object;
  public ucenici: Ucenik[];

  constructor(private http: HttpClient, private ucenikService: UcenikService, private dokumentService: DokumentService) {
    this.newDokument = new Dokument();
    this.JSON = JSON;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.ucenikService.getUcenici().subscribe((ucenici: Ucenik[]) => this.ucenici = ucenici);
  }

  addDokument() {
    this.newDokument.filename = (<HTMLInputElement>document.getElementById('input-dokument')).files[0].name;
    console.log(this.newDokument.filename);
    this.newDokumentAdded.next(this.newDokument);
    this.newDokument = new Dokument();
    this.dokumentService.uploadFile( (<HTMLInputElement>document.getElementById('input-dokument')).files[0] );
  }
}
