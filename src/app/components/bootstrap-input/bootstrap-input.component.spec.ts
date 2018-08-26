import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapInputComponent } from './bootstrap-input.component';

describe('BootstrapInputComponent', () => {
  let component: BootstrapInputComponent;
  let fixture: ComponentFixture<BootstrapInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
