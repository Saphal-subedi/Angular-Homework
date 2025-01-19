import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookServiceService } from '../../Service/book-service.service';
import { Book } from '../../Model/Book';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book-component',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './add-book-component.component.html',
  styleUrl: './add-book-component.component.scss'
})
export class AddBookComponentComponent implements OnInit {
  bookForm: FormGroup;
  newId:number=0;
  priceForNepal: number = 0; 
  priceForIndia: number = 0;

  constructor(private bookService: BookServiceService,private router:Router) {
    this.bookForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', Validators.required),
      authors: new FormArray([],Validators.minLength(1)),
      priceForNepal: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
      priceForIndia: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
      publication: new FormControl(null),
    });
  }
  ngOnInit(): void {
    this.newId = Math.max(...this.bookService.getAllBook().map(book => book.id))+1;
    this.bookForm.patchValue({id:this.newId})
    this.addAuthor()
    
  }

  get authors():FormArray {
    return (this.bookForm.get('authors') as FormArray);
  }

  addAuthor():void {
    this.authors.push(new FormControl(''));
  }
  onPriceChange(from: string): void {
    if(from==='nepal')
    {
      this.priceForIndia=this.bookService.onPriceChange('nepal',this.priceForNepal);
    }
    else
    {
      this.priceForNepal=this.bookService.onPriceChange('india',this.priceForIndia);
    }

  }
  
  onSubmit() {
    
    if (this.bookForm.valid) {
      const authorsString = this.bookForm.value.authors.join(', ');
      console.log("Form is validated",authorsString);
      const newBook: Book = {
        id: this.bookForm.value.id,
        name: this.bookForm.value.name,
        authors: authorsString,
        priceForNepal: this.bookForm.value.priceForNepal,
        priceForIndia: this.bookForm.value.priceForIndia,
        publication: this.bookForm.value.publication
      };
      this.bookService.addBook(newBook);
      this.router.navigate(['']);
    } else {
      console.log("Form is not validated");
      this.bookForm.markAllAsTouched();
    }
  }
}
