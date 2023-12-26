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
  displayValue: string = '';
  constructor() {}

  ngOnInit() {

  }

  onNumericButtonClick(value: string) {
    this.displayValue += value;
  }

  onOperatorButtonClick(operator: string) {
    debugger
     this.displayValue += operator;
  }

  onClearClick() {
    debugger
    this.displayValue = '';
  }

  onEqualClick() {
        let operator = ['+', '-', '*', '/'];
        let expression = this.displayValue;
        let result:any;
        for (let i of operator) {
            if (expression.includes(i)) {
              debugger
                let str = expression.split(i);
                let firstOperand = parseFloat(str[0]);
                let secondOperand = parseFloat(str[1]);
                switch (i) {
                    case '+': 
                        result = firstOperand + secondOperand;
                        break;
                    case '-':
                        result = firstOperand - secondOperand;
                        break;
                    case '*':
                        result = firstOperand * secondOperand;
                        break;
                    case '/':
                        result = firstOperand / secondOperand;
                        break;
                    default: result = "invalid";
                        break;
                }
                this.displayValue = result.toString();
              }
        }
     
    }
    

}

