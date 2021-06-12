import { TestBed } from '@angular/core/testing';

import { AddtrainingService } from './addtraining.service';

describe('AddtrainingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddtrainingService = TestBed.get(AddtrainingService);
    expect(service).toBeTruthy();
  });
});
