import { TestBed } from '@angular/core/testing';

import { ShowLoadingIndicatorService } from './show-loading-indicator.service';

describe('ShowLoadingIndicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowLoadingIndicatorService = TestBed.get(ShowLoadingIndicatorService);
    expect(service).toBeTruthy();
  });
});
