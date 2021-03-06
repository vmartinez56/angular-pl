import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailContainerComponent } from './containers/student-detail-container/student-detail-container.component';
import { StudentFormContainerComponent } from './containers/student-form-container/student-form-container.component';
import { StudentListContainerComponent } from './containers/student-list-container/student-list-container.component';
import { StudentsRoutingModule } from './students-routing.module';

@NgModule({
  declarations: [
    StudentListComponent,
    StudentListContainerComponent,
    StudentFormContainerComponent,
    StudentFormComponent,
    StudentDetailComponent,
    StudentDetailContainerComponent
  ],
  imports: [CommonModule, StudentsRoutingModule, SharedModule, ReactiveFormsModule],
  entryComponents: [StudentDetailContainerComponent]
})
export class StudentsModule {}
