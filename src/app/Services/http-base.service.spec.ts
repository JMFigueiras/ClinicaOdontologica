import { TestBed } from '@angular/core/testing';

import { HttpBaseService } from './http-base.service';

describe('HttpBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpBaseService = TestBed.get(HttpBaseService);
    expect(service).toBeTruthy();
  });
});
