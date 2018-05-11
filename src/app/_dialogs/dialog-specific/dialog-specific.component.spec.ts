import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSpecificComponent } from './dialog-specific.component';

describe('DialogSpecificComponent', () => {
  let component: DialogSpecificComponent;
  let fixture: ComponentFixture<DialogSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
