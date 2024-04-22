import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';
import { IBudgetQuoteResponse } from '../models/budget-quote-response.model';
import { IListQuoteResponse } from '../models/list-quote-response.model';

@Injectable({ providedIn: 'root' })
export class ApiToBudgetQuoteResponseMapper {
  map(payload: any): IBudgetQuoteResponse {
    const typeArray: IBook['type'][] = ['Book', 'Novel'];

    let quote: IListQuoteResponse = {
      totalPrice: payload.quote.totalPrice,
      books: payload.quote.books.map((book: any) => {
        const type: IBook['type'] = typeArray[book.type];

        return {
          title: book.title,
          author: book.author,
          price: book.sellPrice,
          type,
        };
      }),
    };

    return { quote, restBudget: payload.restBudget };
  }
}
