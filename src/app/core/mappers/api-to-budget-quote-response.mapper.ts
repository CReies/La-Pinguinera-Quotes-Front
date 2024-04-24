import { Injectable } from '@angular/core';
import { IBudgetQuoteResponse } from '../models/budget-quote-response.model';
import { IListQuoteResponse } from '../models/list-quote-response.model';

@Injectable({ providedIn: 'root' })
export class ApiToBudgetQuoteResponseMapper {
  map(payload: any): IBudgetQuoteResponse {
    let quote: IListQuoteResponse = {
      totalPrice: payload.quote.totalPrice,
      books: payload.quote.books.map((book: any) => {
        return {
          title: book.title,
          author: book.author,
          price: book.price,
          type: book.type,
        };
      }),
    };

    return { quote, restBudget: payload.restBudget };
  }
}
