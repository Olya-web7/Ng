import { Component, Input } from '@angular/core';
import { SchoolSubject } from '../../models/subject';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
})
export class CurriculumComponent {
  @Input() public curriculum!: SchoolSubject[];
}
