import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../Service/book-service.service';
import { Book } from '../../Model/Book';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-list-component',
  standalone:true,
  
  imports: [CommonModule],
  templateUrl: './book-list-component.component.html',
  styleUrl: './book-list-component.component.scss'
})
export class BookListComponentComponent implements OnInit{
  listOfBook:Book[]=[];
  constructor(private bookService:BookServiceService,private router:Router)
  {

  }
  ngOnInit(): void {
    this.listOfBook=this.bookService.getAllBook();
  }
  onAddBookClicked()
  {
    this.router.navigate(['/addbook']);
  }
  viewDetails(bookId:number):void{
    this.router.navigate([`details/${bookId}`]);
  }


}
