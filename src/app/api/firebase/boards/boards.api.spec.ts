import { TestBed } from '@angular/core/testing';

import { BoardsApi } from './boards.api';

describe('BoardsService', () => {
  let service: BoardsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
