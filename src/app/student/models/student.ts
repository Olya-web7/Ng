import { Gender } from './gender';
import { SchoolSubject } from './subject';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  gender: Gender;
  curriculum?: SchoolSubject[];
}
