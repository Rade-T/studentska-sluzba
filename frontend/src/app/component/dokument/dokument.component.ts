import { Component, OnInit, Output, Input, ViewChild, EventEmitter } from '@angular/core';
import { EditDokumentComponent } from '../edit-dokument/edit-dokument.component';
import { Dokument } from '../../model/dokument.model';
import { DokumentService } from '../../service/dokument.service';
import { AuthenticationService } from '../../security/authentication.service';
import { JwtUtilsService } from '../../security/jwt-utils.service';
import { Router } from '@angular/router';

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

  constructor(private dokumentService: DokumentService,
    private authenticationService: AuthenticationService,
    private jwtUtilsService: JwtUtilsService,
    private router: Router) { }

  public _dokumenti: Dokument[];
  public newDokument: Dokument;
  public editDokument: Dokument;
  public addDokumentVisible: boolean = false;
  public editDokumentVisible: boolean = false;

  ngOnInit() {
    let token = this.authenticationService.getToken();
    let roles = this.jwtUtilsService.getRoles(token.toString());

    if (roles[0] == "nastavnik") {
      this.router.navigate(['/main']);
    }

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
