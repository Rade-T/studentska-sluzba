import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { Ucenik } from '../../model/ucenik.model';
import { UcenikService } from '../../service/ucenik.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AddUcenikComponent } from '../add-ucenik/add-ucenik.component';
import { EditUcenikComponent } from '../edit-ucenik/edit-ucenik.component';
import { AuthenticationService } from '../../security/authentication.service';
import { JwtUtilsService } from '../../security/jwt-utils.service';

@Component({
  selector: 'app-ucenik',
  templateUrl: './ucenik.component.html',
  styleUrls: ['./ucenik.component.css']
})
export class UcenikComponent implements OnInit {

  @Output() deleteUcenikIndex: EventEmitter<number> = new EventEmitter();
  @Output() showAddUcenikEvent: EventEmitter<boolean> = new EventEmitter();
  @ViewChild(AddUcenikComponent) addUcenikComponent: AddUcenikComponent;
  @Input() ucenici: Ucenik[];
  @ViewChild(EditUcenikComponent) editUcenikComponent: EditUcenikComponent;

  public _ucenici: Ucenik[];
  public newUcenik: Ucenik;
  public editUcenik: Ucenik;
  public addUcenikVisible: boolean = false;

  constructor(private ucenikService: UcenikService,
    private authenticationService: AuthenticationService,
    private jwtUtilsService: JwtUtilsService,
    private router: Router) {
    this.ucenici = [];
    this.loadData();
  }

  ngOnInit() {
    let token = this.authenticationService.getToken();
    let roles = this.jwtUtilsService.getRoles(token.toString());

    if (roles[0] == "nastavnik") {
      this.router.navigate(['/main']);
    }
  }

  private loadData() {
    this.ucenikService.getUcenici().subscribe((ucenici: Ucenik[]) => this.ucenici = ucenici);
  }

  save(newUcenik: Ucenik){
    this.ucenikService.saveUcenik(newUcenik).subscribe(
      () => {
        this.loadData();
      }
    );
    this.addUcenikVisible = false;
  }

  delete(id: number){
    this.ucenikService.deleteUcenik(id).subscribe(
      () => {
        this.loadData();
      }
    );
  }

  toggleAddUcenik(show: boolean) {
    console.log("Primljen dogadjaj");
    this.addUcenikVisible = show;
  }

  // delete(index: number) {
  //   this.deleteUcenikIndex.next(index);
  // }

  showAddUcenik() {
    console.log("Poslat event");
    //this.showAddUcenikEvent.next(true);
    this.addUcenikVisible = true;
  }

  setUcenik(ucenik: Ucenik) {
    this.editUcenikComponent.editUcenik = ucenik;
  }

  saveEdit(editUcenik: Ucenik) {
    this.ucenikService.editUcenik(editUcenik).subscribe(
      () => {
        this.loadData();
      }
    );
  }
}
