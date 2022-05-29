import { TestBed } from '@angular/core/testing';

import { RandommerService } from './randommer.service';

describe('RandommerService', () => {
  let service: RandommerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandommerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
