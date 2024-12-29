import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textbox',
  imports: [FormsModule],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss'
})
export class TextboxComponent {
  number: number = 1;
  @Input() Number:string='';

  @Output() resultChanged: EventEmitter<number> = new EventEmitter();

  onNumberChange() {
    console.log("I am pressed");
    this.resultChanged.emit(this.number);
  }




}
