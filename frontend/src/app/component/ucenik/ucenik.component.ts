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

  students: Ucenik[];

  subscription: Subscription;


  constructor(private ucenikService: UcenikService, private router: Router) {
    this.subscription = ucenikService.RegenerateData$.subscribe(() =>
      this.getUcenike()
    );
  }

  ngOnInit() {
    this.getUcenike();
  }

  getUcenike() {
    this.ucenikService.getUcenici().then(students =>
      this.students = students);
  }

  gotoAdd(): void {
    this.router.navigate(['/addStudent']);
  }

  gotoEdit(student: Ucenik): void {
    this.router.navigate(['/editStudent', student.id]);
  }

  deleteStudent(studentId: number): void {
    this.ucenikService.deleteUcenik(studentId).then(
      () => this.getUcenike()
    );
  }

}
