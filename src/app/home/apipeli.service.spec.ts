import { TestBed } from '@angular/core/testing';

import { ApipeliService } from './apipeli.service';

describe('ApipeliService', () => {
  let service: ApipeliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipeliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
