import { TestBed } from '@angular/core/testing';

import { MytamwebserviceService } from './mytamwebservice.service';

describe('MytamwebserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MytamwebserviceService = TestBed.get(MytamwebserviceService);
    expect(service).toBeTruthy();
  });
});
