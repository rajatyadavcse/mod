import { TestBed } from '@angular/core/testing';

import { BlockuserService } from './blockuser.service';

describe('BlockuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockuserService = TestBed.get(BlockuserService);
    expect(service).toBeTruthy();
  });
});
