import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: TThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
