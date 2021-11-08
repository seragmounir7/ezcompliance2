import { TestBed } from '@angular/core/testing';

import { SetTitleService } from './set-title.service';

describe('SetTitleService', () => {
  let service: SetTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
