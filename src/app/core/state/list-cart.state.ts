import { Injectable } from '@angular/core';
import { StateFactory } from './factory.state';
import { BehaviorSubject } from 'rxjs';
import { IBookWithQuantity } from '../models/book-with-quantity.model';

@Injectable({
  providedIn: 'root',
})
export class ListCartState {
  private books$: BehaviorSubject<IBookWithQuantity[]> = new BehaviorSubject<
    IBookWithQuantity[]
  >([]);

  constructor(private readonly factory: StateFactory) {}

  store() {
    return {
      books: this.factory.state(this.books$),
    };
  }
}
