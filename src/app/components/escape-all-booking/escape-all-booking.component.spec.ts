import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeAllBookingComponent } from './escape-all-booking.component';

describe('EscapeAllBookingComponent', () => {
  let component: EscapeAllBookingComponent;
  let fixture: ComponentFixture<EscapeAllBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscapeAllBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapeAllBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
