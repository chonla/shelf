import { TestBed, inject } from '@angular/core/testing';

import { EntityLoaderService } from './entity-loader.service';

describe('EntityLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntityLoaderService]
    });
  });

  it('should ...', inject([EntityLoaderService], (service: EntityLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
