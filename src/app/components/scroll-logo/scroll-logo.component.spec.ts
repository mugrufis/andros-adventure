import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollLogoComponent } from './scroll-logo.component';

describe('ScrollLogoComponent', () => {
  let component: ScrollLogoComponent;
  let fixture: ComponentFixture<ScrollLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
