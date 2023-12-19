import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalulatorComponent } from './calulator.component';

describe('CalulatorComponent', () => {
  let component: CalulatorComponent;
  let fixture: ComponentFixture<CalulatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalulatorComponent]
    });
    fixture = TestBed.createComponent(CalulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
