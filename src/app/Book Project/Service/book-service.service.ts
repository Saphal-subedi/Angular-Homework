import { Injectable } from '@angular/core';
import { Book } from '../Model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  books:Book[]=[
     {id:1,name:"Muna Madan",authors:["Laxmi Prasad Devkota"],publication:"Readers",priceForNepal:100,priceForIndia:160}
  ]
  constructor() { }
   addBook(book:Book):void
  {
    this.books.push(book);

  }
  getAllBook():Book[]
  {
    return this.books;
  }
  onPriceChange(from: string,price:number): number {
    if (from === 'nepal') {
     return  parseFloat((price * 1.6).toFixed(2));  
    } else if (from === 'india') {
    return parseFloat((price / 1.6).toFixed(2)); 
    }
    else{
      return 0;
    }
  }

}
