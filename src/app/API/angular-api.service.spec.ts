import { TestBed } from '@angular/core/testing';

import { AngularAPIService } from './angular-api.service';

describe('AngularAPIService', () => {
  let service: AngularAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
