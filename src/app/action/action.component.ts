import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
})
export class ActionComponent {
 
  @Output() operatorClick = new EventEmitter<string>();
  @Output() clearClick = new EventEmitter<void>();
  @Output() equalClick = new EventEmitter<void>();

  onOperatorClicked(value: string) {
    debugger
    this.operatorClick.emit(value);
  }

  onClearClicked() {
    this.clearClick.emit();
  }

  onEqualClicked() {
    this.equalClick.emit();
  }

}
