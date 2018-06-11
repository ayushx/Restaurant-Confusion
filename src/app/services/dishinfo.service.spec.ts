import { TestBed, inject } from '@angular/core/testing';

import { DishinfoService } from './dishinfo.service';

describe('DishinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishinfoService]
    });
  });

  it('should be created', inject([DishinfoService], (service: DishinfoService) => {
    expect(service).toBeTruthy();
  }));
});
