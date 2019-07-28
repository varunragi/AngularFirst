import { TestBed } from '@angular/core/testing';

import { EmpdateService } from './empdate.service';

describe('EmpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpdateService = TestBed.get(EmpdateService);
    expect(service).toBeTruthy();
  });
});
