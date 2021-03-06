import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { TherapyTypes } from '../../enums/therapy-types.enum';
import { Student } from '../../models/student.model';
import { StudentFormComponent } from './student-form.component';

describe('StudentFormComponent', () => {
  let component: StudentFormComponent;
  let fixture: ComponentFixture<StudentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [StudentFormComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should patch the value if item exist', () => {
    const student: Student = { id: '1', name: 'test', therapies: [TherapyTypes.behavioral] };
    component.item = student;

    component.ngOnChanges();

    expect(component.form.value).toEqual(student);
  });

  it('should not patch the form if items does not exist', () => {
    const student: Student = { id: '1', name: 'test', therapies: [TherapyTypes.behavioral] };

    component.ngOnChanges();

    expect(component.form.value).not.toEqual(student);
  });

  it('should add a therapy', () => {
    spyOn(component.therapiesFormArray, 'push');

    component.addTherapy();

    expect(component.therapiesFormArray.push).toHaveBeenCalled();
  });

  it('should remove a therapy', () => {
    spyOn(component.therapiesFormArray, 'removeAt');

    component.deleteTherapy(1);

    expect(component.therapiesFormArray.removeAt).toHaveBeenCalledWith(1);
  });

  it('should get the uniqueValues error in form', () => {
    const mockedTherapies: TherapyTypes[] = [TherapyTypes.behavioral, TherapyTypes.behavioral];
    mockedTherapies.forEach(therapy => component.therapiesFormArray.push(new FormControl(therapy)));

    expect(component.form.get('therapies').hasError('uniqueValues')).toBeTruthy();
  });
});
