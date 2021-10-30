import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentViewComponent } from './components/student-view/student-view.component';
import {MatCardModule} from '@angular/material/card';
import {MatCommonModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { SubjectComponent } from './components/subject/subject.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';


@NgModule({
  declarations: [
    StudentViewComponent,
    SubjectComponent,
    CurriculumComponent
  ],
  imports: [
    CommonModule,
    MatCommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    StudentViewComponent,
  ]
})
export class StudentModule { }
