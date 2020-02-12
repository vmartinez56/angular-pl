import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-form-container',
  templateUrl: './student-form-container.component.html',
  styleUrls: ['./student-form-container.component.scss']
})
export class StudentFormContainerComponent implements OnInit {
  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  submit(student: Student): void {
    this.studentsService
      .createStudent(student)
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['..']);
        this.matSnackBar.open('The student has been created', 'Ok', { duration: 2000 });
      });
  }
}
