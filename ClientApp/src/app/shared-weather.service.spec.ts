import { TestBed } from '@angular/core/testing';

import { SharedWeatherService } from './shared-weather.service';

describe('SharedWeatherService', () => {
  let service: SharedWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
