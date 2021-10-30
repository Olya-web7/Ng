import { Component, Input } from '@angular/core';
import { SchoolSubject } from '../../models/subject';

@Component({
  selector: 'tr[app-subject]',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent {
  @Input() public subject!: SchoolSubject;
}
