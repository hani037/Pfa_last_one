import { TestBed } from '@angular/core/testing';

import { AuditGuardService } from './audit-guard.service';

describe('AuditGuardService', () => {
  let service: AuditGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
