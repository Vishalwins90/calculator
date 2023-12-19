import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonwrapperComponent } from './buttonwrapper.component';

describe('ButtonwrapperComponent', () => {
  let component: ButtonwrapperComponent;
  let fixture: ComponentFixture<ButtonwrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonwrapperComponent]
    });
    fixture = TestBed.createComponent(ButtonwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
