import { TestBed } from '@angular/core/testing';

import { ChangeModuleService } from './change-module.service';

describe('ChangeModuleService', () => {
  let service: ChangeModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
