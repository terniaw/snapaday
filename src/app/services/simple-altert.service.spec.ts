import { TestBed } from '@angular/core/testing';

import { SimpleAltertService } from './simple-altert.service';

describe('SimpleAltertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleAltertService = TestBed.get(SimpleAltertService);
    expect(service).toBeTruthy();
  });
});
