import { TestBed } from '@angular/core/testing';

import { UsercompletedtrainingsService } from './usercompletedtrainings.service';

describe('UsercompletedtrainingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsercompletedtrainingsService = TestBed.get(UsercompletedtrainingsService);
    expect(service).toBeTruthy();
  });
});
