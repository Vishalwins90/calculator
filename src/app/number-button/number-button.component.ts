import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.css'],
})
export class NumberButtonComponent {
  @Output() operatorClick = new EventEmitter<string>();

  numberclick(value: string) { debugger
    this.operatorClick.emit(value);
  }
}
