import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent {
  @Input() public student!: Student;
  @Output() public grades = new EventEmitter();

  public getGrades() {
    this.grades.emit(
      this.student.curriculum
    );
  }
}
