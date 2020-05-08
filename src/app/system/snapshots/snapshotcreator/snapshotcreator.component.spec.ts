import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotcreatorComponent } from './snapshotcreator.component';

describe('SnapshotcreatorComponent', () => {
  let component: SnapshotcreatorComponent;
  let fixture: ComponentFixture<SnapshotcreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapshotcreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshotcreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
