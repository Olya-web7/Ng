import { Component } from '@angular/core';
import { Gender } from './student/models/gender';
import { Student } from './student/models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public student: Student = {
    id: 0,
    firstName: 'Ivan',
    lastName: 'Ivanov',
    gender: Gender.BOY,
    curriculum: [
      {
        id: 1,
        name: 'Algebra',
        grade: 10,
      },
    ],
  };
}
