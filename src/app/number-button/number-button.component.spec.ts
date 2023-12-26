import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberButtonComponent } from './number-button.component';

describe('NumberButtonComponent', () => {
  let component: NumberButtonComponent;
  let fixture: ComponentFixture<NumberButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberButtonComponent]
    });
    fixture = TestBed.createComponent(NumberButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
