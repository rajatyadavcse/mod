import { TestBed } from '@angular/core/testing';

import { PaymenthistoryService } from './paymenthistory.service';

describe('PaymenthistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymenthistoryService = TestBed.get(PaymenthistoryService);
    expect(service).toBeTruthy();
  });
});
