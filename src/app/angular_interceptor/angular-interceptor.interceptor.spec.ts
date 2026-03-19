import { TestBed } from '@angular/core/testing';

import { AngularInterceptorInterceptor } from './angular-interceptor.interceptor';

describe('AngularInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AngularInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AngularInterceptorInterceptor = TestBed.inject(AngularInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
