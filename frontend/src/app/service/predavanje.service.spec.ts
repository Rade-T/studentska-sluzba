import { TestBed, inject } from '@angular/core/testing';

import { PredavanjeService } from './predavanje.service';

describe('PredavanjeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PredavanjeService]
    });
  });

  it('should be created', inject([PredavanjeService], (service: PredavanjeService) => {
    expect(service).toBeTruthy();
  }));
});
