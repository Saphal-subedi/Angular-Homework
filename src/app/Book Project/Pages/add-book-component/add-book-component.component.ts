import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookServiceService } from '../../Service/book-service.service';
import { Book } from '../../Model/Book';


@Component({
  selector: 'app-add-book-component',
  standalone:true,
  
  imports: [],
  templateUrl: './add-book-component.component.html',
  styleUrl: './add-book-component.component.scss'
})
export class AddBookComponentComponent {
  bookForm:FormGroup;
  constructor(private bookService:BookServiceService)
  {
    this.bookForm=new FormGroup(
      {
        id:new FormControl(),
        name:new FormControl(),
        authors:new FormControl(),
        priceForNepal:new FormControl(),
        priceForIndia:new FormControl(),
        publication:new FormControl()
      }

    )
  }
  onSubmit()
  {
    if(this.bookForm.valid)
    {
       const newBook:Book={
        id:this.bookForm.value.id,
        name:this.bookForm.value.name,
        authors:this.bookForm.value.authors,
        priceForNepal:this.bookForm.value.priceForNepal,
        priceForIndia:this.bookForm.value.priceForIndia,
        publication:this.bookForm.value.publication


      };
      this.bookService.addBook(newBook);
    }

  }

}
