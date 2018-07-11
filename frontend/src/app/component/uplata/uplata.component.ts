import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Uplata } from '../../model/uplata.model';
import { UplataService } from '../../service/uplata.service';
import { AddUplataComponent } from '../add-uplata/add-uplata.component';
import { EditUplataComponent } from '../edit-uplata/edit-uplata.component';
import { AuthenticationService } from '../../security/authentication.service';
import { JwtUtilsService } from '../../security/jwt-utils.service';


@Component({
  selector: 'app-uplata',
  templateUrl: './uplata.component.html',
  styleUrls: ['./uplata.component.css']
})
export class UplataComponent implements OnInit {

  @Output() deleteUplatakIndex: EventEmitter<number> = new EventEmitter();
  @Output() showAddUplataEvent: EventEmitter<boolean> = new EventEmitter();
  @ViewChild(AddUplataComponent) addUplataComponent: AddUplataComponent;
  @Input() uplata: Uplata[];
  @ViewChild(EditUplataComponent) editUplataComponent: EditUplataComponent;

  public _uplata: Uplata[];
  public newUplata: Uplata;
  public editUplata: Uplata;
  public addUplataVisible: boolean = false;
  private isButtonVisible = true;

  constructor(private uplataService: UplataService,
    private authenticationService: AuthenticationService,
    private jwtUtilsService: JwtUtilsService,
    private router: Router) {
    this._uplata = [];
    this.loadData();
  }

  ngOnInit() {
    let token = this.authenticationService.getToken();
    let roles = this.jwtUtilsService.getRoles(token.toString());

    if (roles[0] == "nastavnik") {
      this.router.navigate(['/main']);
    }
    if (roles[0] == "ucenik") {
      this.isButtonVisible = false;
    }
  }

  private loadData() {
    this.uplataService.getUplate().subscribe((uplata: Uplata[]) => this._uplata = uplata);
  }

  save(newUplata: Uplata){
    this.uplataService.saveUplata(newUplata).subscribe(
      () => {
        this.loadData();
      }
    );
    this.addUplataVisible = false;
  }

  delete(id: number){
    this.uplataService.deleteUplata(id).subscribe(
      () => {
        this.loadData();
      }
    );
  }

  toggleAddUplata(show: boolean) {
    console.log("Primljen dogadjaj");
    this.addUplataVisible = show;
  }

  showAddUplata() {
    console.log("Poslat event");
    this.addUplataVisible = true;
  }

  setUplata(uplata: Uplata) {
    this.editUplataComponent.editUplata = uplata;
  }

  saveEdit(editUplata: Uplata) {
    this.uplataService.editUplata(editUplata).subscribe(
      () => {
        this.loadData();
      }
    );
  }
}
