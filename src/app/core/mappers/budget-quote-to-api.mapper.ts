import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';
import { IBudgetQuoteRequest } from '../models/budget-quote-request.model';

@Injectable({ providedIn: 'root' })
export class BudgetQuoteToApiMapper {
  map(payload: IBook[], budget: string): IBudgetQuoteRequest {
    let books = payload.map((book) => book.id);
    let budgetInt = Number.parseInt(budget, 10);

    return { BookIds: books, Budget: budgetInt };
  }
}
