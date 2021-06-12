import { TestBed } from '@angular/core/testing';

import { UsercurrenttrainingsService } from './usercurrenttrainings.service';

describe('UsercurrenttrainingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsercurrenttrainingsService = TestBed.get(UsercurrenttrainingsService);
    expect(service).toBeTruthy();
  });
});
