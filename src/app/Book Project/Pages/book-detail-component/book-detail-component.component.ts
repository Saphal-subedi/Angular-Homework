import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../Model/Book';
import { BookServiceService } from '../../Service/book-service.service';

@Component({
  selector: 'app-book-detail-component',
  imports: [],
  templateUrl: './book-detail-component.component.html',
  styleUrl: './book-detail-component.component.scss'
})
export class BookDetailComponentComponent implements OnInit {
  bookId:number=0;
  bookDetails: Book | any;
  constructor(private route:ActivatedRoute,private bookService:BookServiceService)
  {
    
    
  }
  ngOnInit(): void {
    this.bookId=+this.route.snapshot.paramMap.get('bookId')!;
    if (!isNaN(this.bookId)) {
    this.bookDetails = this.bookService.getAllBook().find((book) => book.id === this.bookId);
    }
  
  }

}
