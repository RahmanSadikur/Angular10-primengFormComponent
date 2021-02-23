import { TestBed } from '@angular/core/testing';

import { EmployyeService } from './employye.service';

describe('EmployyeService', () => {
  let service: EmployyeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployyeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
