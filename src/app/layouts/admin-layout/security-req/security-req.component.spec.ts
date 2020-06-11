import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityReqComponent } from './security-req.component';

describe('SecurityReqComponent', () => {
  let component: SecurityReqComponent;
  let fixture: ComponentFixture<SecurityReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
