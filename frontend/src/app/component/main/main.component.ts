import { Component, OnInit } from '@angular/core';
import { Ucenik } from '../../model/ucenik.model';
import { UcenikService } from '../../service/ucenik.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // public ucenici: Ucenik[];
  // public newUcenik: Ucenik;
  // public addUcenikVisible: boolean = false;

  // constructor(private ucenikService: UcenikService) {
  //   ucenikService.getUcenici();
  //   this.ucenici = [];
  //   this.loadData();
  // }

  constructor() {}

  ngOnInit() {
  }

  // private loadData() {
  //   this.ucenikService.getUcenici().subscribe((ucenici: Ucenik[]) => this.ucenici = ucenici);
  // }

  // save(newUcenik: Ucenik){
  //   this.ucenikService.saveUcenik(newUcenik).subscribe(
  //     () => {
  //       this.loadData();
  //     }
  //   );
  //   this.addUcenikVisible = false;
  // }

  // delete(id: number){
  //   this.ucenikService.deleteUcenik(id).subscribe(
  //     () => {
  //       this.loadData();
  //     }
  //   );
  // }

  // toggleAddUcenik(show: boolean) {
  //   console.log("Primljen dogadjaj");
  //   this.addUcenikVisible = show;
  // }
}
