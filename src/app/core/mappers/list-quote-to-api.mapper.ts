import { Injectable } from '@angular/core';
import { IBookWithQuantity } from '../models/book-with-quantity.model';
import { IListQuoteRequest } from '../models/list-quote-request.model';

@Injectable({ providedIn: 'root' })
export class ListQuoteToApiMapper {
  map(payload: IBookWithQuantity[]): IListQuoteRequest {
    return {
      books: payload.map((book) => ({ id: book.id, quantity: book.quantity })),
    };
  }
}
