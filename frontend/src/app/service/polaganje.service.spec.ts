import { TestBed, inject } from '@angular/core/testing';

import { PolaganjeService } from './polaganje.service';

describe('PolaganjeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PolaganjeService]
    });
  });

  it('should be created', inject([PolaganjeService], (service: PolaganjeService) => {
    expect(service).toBeTruthy();
  }));
});
