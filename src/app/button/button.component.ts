import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {

  @Input() value: any;
  @Output() sendvalue: any = new EventEmitter<string>();

  onClick(value: any) {
    this.sendvalue.emit(value);
  }
}


