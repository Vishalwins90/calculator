import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
})
export class ActionComponent {
  @Output() actionData: any = new EventEmitter();
  @Output() number:any=new EventEmitter();
  @Output() showResults:  EventEmitter<boolean> = new EventEmitter<boolean>();
  display: any;
  result:any
  firstValue: any;
  action: any;
  operator(action: any) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = '';

    let operatorObj = {
      firstValue : this.firstValue,
      action:this.action,
      display:this.display
    };
    this.actionData.emit(operatorObj)
  }
  calc(){
    this.showResults.emit(true)
  }

  resetCalculator() {
    this.display = '0';
  }

}
