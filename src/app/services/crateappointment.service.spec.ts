import { TestBed } from '@angular/core/testing';

import { CrateappointmentService } from './crateappointment.service';

describe('CrateappointmentService', () => {
  let service: CrateappointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrateappointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
