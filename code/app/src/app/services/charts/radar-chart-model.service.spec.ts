import { TestBed } from '@angular/core/testing';

import { RadarChartModelService } from './radar-chart-model.service';

describe('RadarChartModelService', () => {
  let service: RadarChartModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadarChartModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
