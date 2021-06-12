import { TestBed } from '@angular/core/testing';
import { SignupForMentorService } from './signupformentor.service';



describe('SignupformentorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignupForMentorService = TestBed.get(SignupForMentorService);
    expect(service).toBeTruthy();
  });
});
