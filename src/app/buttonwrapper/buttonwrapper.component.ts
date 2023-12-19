import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-buttonwrapper',
  templateUrl: './buttonwrapper.component.html',
  styleUrls: ['./buttonwrapper.component.css'],
})
export class ButtonwrapperComponent implements OnInit {
  receivedChildMessage: any = 0;
  @Output() showResults: EventEmitter<boolean> = new EventEmitter<boolean>();
  data: any = 0;
  firstValue: number = 0;
  action: any;
  display: any;
  Arry: Array<any> = [];
  constructor() {}
  ngOnInit() {}
  getMessage(message: any) {
  this.receivedChildMessage = message;
  this.firstValue = parseFloat(message);
  this.Arry.push(message);
  console.log(this.Arry)
  }
  calulatedata(message: any) {
    this.data = message;
  }
  operator(event: any) {
    this.receivedChildMessage = event.display;
    this.display = event.display;
    this.action = event.action;
    console.log(this.action);
  }
  total(number: any) {
    this.receivedChildMessage = number.total;
  }
  calulatetotal() {
  // const a = this.firstValue;
  //  const b = parseFloat(this.receivedChildMessage);
    let result: any;
    if (this.action === 'm') {
      let val = 1;
      this.Arry.map((item: any) => {
        val *= Number(item);
      });
      result = val;
    } else if (this.action === 'a') {
      let val = 0;
      this.Arry.map((itm: any) => {
        this.action
        val +=Number(itm);
      });
      result = val;
    } else if (this.action === 's') {
      debugger
      let val = Number(this.Arry[0]);
      this.Arry.slice(1).map((itm: any) => {
        val -= Number(itm);
      });
      result = val;
    } else if (this.action === 'd') {
      let val = Number(this.Arry[0]);
      if (val !== 0) {
        this.Arry.slice(1).map((itm: any) => {
          val /= Number(itm);
        });
      }
      result = val;
    }
    this.firstValue = result;
    this.receivedChildMessage = result.toString();
  }
  resetCalculator() {
    this.receivedChildMessage = 0;
  }
}
