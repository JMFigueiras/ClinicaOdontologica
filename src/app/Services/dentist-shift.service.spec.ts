import { TestBed } from '@angular/core/testing';

import { DentistShiftService } from './dentist-shift.service';

describe('DentistShiftService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DentistShiftService = TestBed.get(DentistShiftService);
    expect(service).toBeTruthy();
  });
});
