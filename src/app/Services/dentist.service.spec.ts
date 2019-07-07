import { TestBed } from '@angular/core/testing';

import { DentistService } from './dentist.service';

describe('DentistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DentistService = TestBed.get(DentistService);
    expect(service).toBeTruthy();
  });
});
