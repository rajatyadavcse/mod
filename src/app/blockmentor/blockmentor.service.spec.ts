import { TestBed } from '@angular/core/testing';

import { BlockmentorService } from './blockmentor.service';

describe('BlockmentorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockmentorService = TestBed.get(BlockmentorService);
    expect(service).toBeTruthy();
  });
});
