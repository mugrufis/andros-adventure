import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkOfficeComponent } from './dark-office.component';

describe('DarkOfficeComponent', () => {
  let component: DarkOfficeComponent;
  let fixture: ComponentFixture<DarkOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
