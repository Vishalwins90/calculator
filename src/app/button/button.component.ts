import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output() childButtonEvent = new EventEmitter();
  display:any=0
  pressNum(number: any) {
    debugger
    if (this.display === '0') {
     this.childButtonEvent.emit(this.display=number.toString());
    } else {
      this.display=number
      this.childButtonEvent.emit(`${this.display}`);
    }
  }
}

