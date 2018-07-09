import { Component, OnInit, Output, Input, ViewChild, EventEmitter } from '@angular/core';
import { EditDokumentComponent } from '../edit-dokument/edit-dokument.component';
import { Dokument } from '../../model/dokument.model';
import { DokumentService } from '../../service/dokument.service';

@Component({
  selector: 'app-dokument',
  templateUrl: './dokument.component.html',
  styleUrls: ['./dokument.component.css']
})
export class DokumentComponent implements OnInit {

  @Output() deleteDokumentIndex: EventEmitter<number> = new EventEmitter();
  @Output() editDokumentEvent: EventEmitter<Dokument> = new EventEmitter();
  @Input() dokumenti: Dokument[];
  @ViewChild(EditDokumentComponent) editDokumentComponent: EditDokumentComponent;

  constructor(private dokumentService: DokumentService) { }

  public _dokumenti: Dokument[];
  public newDokument: Dokument;
  public editDokument: Dokument;
  public addDokumentVisible: boolean = false;
  public editDokumentVisible: boolean = false;

  ngOnInit() {
    this.dokumentService.getDokumenti();
    this._dokumenti = [];
    this.loadDokumentData();
  }

  delete(index: number) {
    this.dokumentService.deleteDokument(index).subscribe(
      () => {
        this.loadDokumentData();
      }
    );
  }

  loadDokumentData() {
    this.dokumentService.getDokumenti().subscribe((dokumenti: Dokument[]) => this._dokumenti = dokumenti);
  }

  setDokument(dokument: Dokument) {
    this.editDokumentComponent.editDokument = dokument;
  }

  save(newDokument: Dokument) {
    this.dokumentService.saveDokument(newDokument).subscribe(
      () => {
        this.loadDokumentData();
      }
    );
    this.addDokumentVisible = false;
  }

  saveEdit(editDokument: Dokument) {
    console.log(editDokument);
    this.dokumentService.editDokument(editDokument).subscribe(
      () => {
        this.loadDokumentData();
      }
    );
  }

  toggleAddDokument(show: boolean) {
    this.addDokumentVisible = show;
  }

  showAddDokument() {
    this.addDokumentVisible = true;
  }
}
