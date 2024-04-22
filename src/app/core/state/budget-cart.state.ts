import { Injectable } from '@angular/core';
import { StateFactory } from './factory.state';
import { BehaviorSubject } from 'rxjs';
import { IBudgetQuoteRequest } from '../models/budget-quote-request.model';
import { IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BudgetCartState {
  private books$: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>([]);

  constructor(private readonly factory: StateFactory) {}

  store() {
    return {
      books: this.factory.state(this.books$),
    };
  }
}
