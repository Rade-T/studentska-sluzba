import { Component, OnInit } from '@angular/core';
import { Ucenik } from '../../model/ucenik.model';
import { UcenikService } from '../../service/ucenik.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ucenik',
  templateUrl: './ucenik.component.html',
  styleUrls: ['./ucenik.component.css']
})
export class UcenikComponent implements OnInit {

  ucenici: Ucenik[];

  subscription: Subscription;

  constructor(private ucenikService: UcenikService, private router: Router) {
    this.subscription = ucenikService.RegenerateData$.subscribe(() =>
      this.getUcenici()
    );
  }

  ngOnInit() {
    this.getUcenici();
  }

  save(newUcenik: Ucenik) {
    this.ucenikService.saveUcenik(newUcenik).subscribe(
      () => {
        this.getUcenici();
      }
    )
  }

  getUcenici() {
    this.ucenikService.getUcenici().subscribe((ucenici: Ucenik[]) => {this.ucenici = ucenici});
    console.log(this.ucenici);
  }

  gotoAdd(): void {
    this.router.navigate(['/addUcenik']);
  }

  gotoEdit(ucenik: Ucenik): void {
    this.router.navigate(['/editUcenik', ucenik.id]);
  }

  deleteStudent(ucenikId: number): void {
    this.ucenikService.deleteUcenik(ucenikId).then(
      () => this.getUcenici()
    );
  }

}
