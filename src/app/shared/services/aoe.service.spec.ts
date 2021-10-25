import { TestBed } from '@angular/core/testing';

import { AoeService } from './aoe.service';

describe('AoeService', () => {
  let service: AoeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AoeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
