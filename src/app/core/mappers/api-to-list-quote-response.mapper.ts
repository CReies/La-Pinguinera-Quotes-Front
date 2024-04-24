import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';
import { IListQuoteResponse } from '../models/list-quote-response.model';

@Injectable({ providedIn: 'root' })
export class ApiToListQuoteResponseMapper {
  map(payload: any): IListQuoteResponse {
    const books: IBook[] = payload.books.map((book: any) => {
      return {
        title: book.title,
        author: book.author,
        price: book.price,
        type: book.type,
      };
    });

    return {
      totalPrice: payload.totalPrice,
      books,
    };
  }
}
