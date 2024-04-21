import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';
import { IListQuoteResponse } from '../models/list-quote-response.model';

@Injectable({ providedIn: 'root' })
export class ApiToListQuoteResponseMapper {
  map(payload: any): IListQuoteResponse {
    const typeArray: IBook['type'][] = ['Book', 'Novel'];

    const books: IBook[] = payload.books.map((book: any) => {
      const type: IBook['type'] = typeArray[book.type];

      return {
        title: book.title,
        author: book.author,
        price: book.sellPrice,
        type,
      };
    });

    return {
      totalPrice: payload.totalPrice,
      books,
    };
  }
}
