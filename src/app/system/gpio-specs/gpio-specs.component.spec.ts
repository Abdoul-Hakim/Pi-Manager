import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpioSpecsComponent } from './gpio-specs.component';

describe('GpioSpecsComponent', () => {
  let component: GpioSpecsComponent;
  let fixture: ComponentFixture<GpioSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpioSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpioSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
