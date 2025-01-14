import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  imports: [FormsModule,CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  successMessage:string=''
  onSubmit(form:NgForm) {
    if (form.valid) {
      this.successMessage="Form Submitted Successfully."
      
    } else {
      console.log('Form is invalid.');
    }
  }
}
