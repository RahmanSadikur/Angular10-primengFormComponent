import { TestBed } from '@angular/core/testing';

import { NewApplicantService } from './new-applicant.service';

describe('NewApplicantService', () => {
  let service: NewApplicantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewApplicantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
