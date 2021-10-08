import { TestBed } from '@angular/core/testing';

import { LandingPageInfoServiceService } from './landing-page-info-service.service';

describe('LandingPageInfoServiceService', () => {
  let service: LandingPageInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingPageInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
