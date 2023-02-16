import { TestBed } from '@angular/core/testing';

import { AuthApi } from './auth-firebase.api';

describe('AuthApi', () => {
  let service: AuthApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
