import { TestBed } from '@angular/core/testing';

import { MentorcurrenttrainingsService } from './mentorcurrenttrainings.service';

describe('MentorcurrenttrainingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MentorcurrenttrainingsService = TestBed.get(MentorcurrenttrainingsService);
    expect(service).toBeTruthy();
  });
});
