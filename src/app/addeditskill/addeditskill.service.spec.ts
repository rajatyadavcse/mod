import { TestBed } from '@angular/core/testing';

import { AddeditskillService } from './addeditskill.service';

describe('AddeditskillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddeditskillService = TestBed.get(AddeditskillService);
    expect(service).toBeTruthy();
  });
});
