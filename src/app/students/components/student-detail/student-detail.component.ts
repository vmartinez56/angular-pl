import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentDetailComponent {
  @Input() student: Student;
}
