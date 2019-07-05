import { TestBed } from '@angular/core/testing';

import { ChartTestService } from './chart-test.service';

describe('ChartTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartTestService = TestBed.get(ChartTestService);
    expect(service).toBeTruthy();
  });
});
