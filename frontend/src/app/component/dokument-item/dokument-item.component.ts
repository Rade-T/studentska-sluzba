import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dokument } from '../../model/dokument.model';
import { DokumentService } from '../../service/dokument.service';

@Component({
  selector: 'tr[app-dokument-item]',
  templateUrl: './dokument-item.component.html',
  styleUrls: ['./dokument-item.component.css']
})
export class DokumentItemComponent implements OnInit {

  @Input() dokument: Dokument;
	@Input() index: number;
  @Output() deleteDokumentIndex: EventEmitter<number> = new EventEmitter();
  @Output() editDokumentIndex: EventEmitter<Dokument> = new EventEmitter();

  constructor(private dokumentService: DokumentService) { }

  ngOnInit() {
  }

  deleteDokument(id: number) {
  	this.deleteDokumentIndex.next(id);
  }

  editDokument(d: Dokument) {
    this.editDokumentIndex.next(d);
  }

  downloadDokument(filename: string) {
    this.dokumentService.downloadFile(filename);
  }
}
