import { TestBed, inject } from '@angular/core/testing';

import { PohadjanjeService } from './pohadjanje.service';

describe('PohadjanjeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PohadjanjeService]
    });
  });

  it('should be created', inject([PohadjanjeService], (service: PohadjanjeService) => {
    expect(service).toBeTruthy();
  }));
});
