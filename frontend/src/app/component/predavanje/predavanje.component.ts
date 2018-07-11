import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Predavanje } from '../../model/predavanje.model';
import { PredavanjeService } from '../../service/predavanje.service';
import { AddPredavanjeComponent } from '../add-predavanje/add-predavanje.component';
import { EditPredavanjeComponent } from '../edit-predavanje/edit-predavanje.component';
import { AuthenticationService } from '../../security/authentication.service';
import { JwtUtilsService } from '../../security/jwt-utils.service';

@Component({
  selector: 'app-predavanje',
  templateUrl: './predavanje.component.html',
  styleUrls: ['./predavanje.component.css']
})
export class PredavanjeComponent implements OnInit {

  @Output() deletePredavanjekIndex: EventEmitter<number> = new EventEmitter();
  @Output() showAddPredavanjeEvent: EventEmitter<boolean> = new EventEmitter();
  @ViewChild(AddPredavanjeComponent) addPredavanjeComponent: AddPredavanjeComponent;
  @Input() predavanje: Predavanje[];
  @ViewChild(EditPredavanjeComponent) editPredavanjeComponent: EditPredavanjeComponent;

  public _predavanja: Predavanje[];
  public newPredavanje: Predavanje;
  public editPredavanje: Predavanje;
  public addPredavanjeVisible: boolean = false;
  private isButtonVisible = true;

  constructor(private predavanjeService: PredavanjeService,
    private authenticationService: AuthenticationService,
    private jwtUtilsService: JwtUtilsService,
    private router: Router) {
    this._predavanja = [];
    this.loadData();
  }

  ngOnInit() {
    let token = this.authenticationService.getToken();
    let roles = this.jwtUtilsService.getRoles(token.toString());

    if (roles[0] == "ucenik") {
      this.router.navigate(['/main']);
    }
    if (roles[0] == "nastavnik") {
      this.isButtonVisible = false;
    }
    this.loadData();
  }

  private loadData() {
    this.predavanjeService.getPredavanja().subscribe((predavanja: Predavanje[]) => this._predavanja = predavanja);
  }

  save(newPredavanje: Predavanje){
    console.log(newPredavanje);
    this.predavanjeService.savePredavanje(newPredavanje).subscribe(
      () => {
        this.loadData();
      }
    );
    this.addPredavanjeVisible = false;
  }

  delete(id: number){
    this.predavanjeService.deletePredavanje(id).subscribe(
      () => {
        this.loadData();
      }
    );
  }

  toggleAddPredavanje(show: boolean) {
    console.log("Primljen dogadjaj");
    this.addPredavanjeVisible = show;
  }

  showAddPredavanje() {
    console.log("Poslat event");
    this.addPredavanjeVisible = true;
    console.log(this.addPredavanjeVisible);
  }

  setPredavanje(predavanje: Predavanje) {
    this.editPredavanjeComponent.editPredavanje = predavanje;
  }

  saveEdit(editPredavanje: Predavanje) {
    this.predavanjeService.editPredavanje(editPredavanje).subscribe(
      () => {
        this.loadData();
      }
    );
  }


}
