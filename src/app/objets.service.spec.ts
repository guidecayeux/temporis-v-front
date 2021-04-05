import { TestBed } from '@angular/core/testing';

import { ObjetsService } from './objets.service';

describe('ObjetsService', () => {
  let service: ObjetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
