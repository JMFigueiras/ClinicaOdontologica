import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistShiftComponent } from './dentist-shift.component';

describe('DentistShiftComponent', () => {
  let component: DentistShiftComponent;
  let fixture: ComponentFixture<DentistShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentistShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentistShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
