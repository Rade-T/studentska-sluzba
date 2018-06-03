import { Component, OnInit } from '@angular/core';
import { Ucenik } from '../../model/ucenik.model';
import { UcenikService } from '../../service/ucenik.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public ucenici: Ucenik[];
  public newUcenik: Ucenik;

  constructor(private ucenikService: UcenikService) {
    ucenikService.getUcenici();
    this.ucenici = [];
    this.loadData();
  }

  ngOnInit() {
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
  }

  delete(id: number){
    this.ucenikService.deleteUcenik(id).subscribe(
      () => {
        this.loadData();
      }
    );
  }
}
