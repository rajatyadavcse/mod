import { TestBed } from '@angular/core/testing';

import { AddedittechnologyService } from './addedittechnology.service';

describe('AddedittechnologyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddedittechnologyService = TestBed.get(AddedittechnologyService);
    expect(service).toBeTruthy();
  });
});
