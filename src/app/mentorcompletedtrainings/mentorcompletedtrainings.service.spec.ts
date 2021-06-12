import { TestBed } from '@angular/core/testing';

import { MentorcompletedtrainingsService } from './mentorcompletedtrainings.service';

describe('MentorcompletedtrainingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MentorcompletedtrainingsService = TestBed.get(MentorcompletedtrainingsService);
    expect(service).toBeTruthy();
  });
});
