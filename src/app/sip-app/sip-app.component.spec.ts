import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipAppComponent } from './sip-app.component';

describe('SipAppComponent', () => {
  let component: SipAppComponent;
  let fixture: ComponentFixture<SipAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SipAppComponent]
    });
    fixture = TestBed.createComponent(SipAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
