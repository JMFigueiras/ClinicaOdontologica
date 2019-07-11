import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistShiftViewerComponent } from './dentist-shift-viewer.component';

describe('DentistShiftViewerComponent', () => {
  let component: DentistShiftViewerComponent;
  let fixture: ComponentFixture<DentistShiftViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentistShiftViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentistShiftViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
