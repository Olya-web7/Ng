import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Gender } from './student/models/gender';
import { Student } from './student/models/student';
import { SchoolSubject } from './student/models/subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public student$!: Observable<Student>;
  public alertGrades(subjects: SchoolSubject[]) {
    alert(subjects.reduce((acc, { name, grade }) => acc + `${name}: ${grade}\n`, ''));
  }

  public ngOnInit() {
    this.student$ = forkJoin(
      this.getStudent$(),
      this.getCurriculum$()
    ).pipe(
      map(([student, curriculum]) => ({
        ...student,
        curriculum
      }))
    )
  }

  public getStudent$(): Observable<Student> {
    return of({
      id: 0,
      firstName: 'Ivan',
      lastName: 'Ivanov',
      gender: Gender.BOY,
    })
  }

  public getCurriculum$(): Observable<SchoolSubject[]> {
    return of([
      {
        id: 1,
        name: 'Algebra',
        grade: 10,
      },
      {
        id: 2,
        name: 'Physics',
        grade: 7,
      },
    ]);
  }

}
