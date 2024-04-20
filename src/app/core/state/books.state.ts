import { Injectable } from '@angular/core';
import { StateFactory } from './factory.state';
import { BehaviorSubject } from 'rxjs';
import { IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksState {
  private allBooks$: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>(
    null
  );

  constructor(private readonly factory: StateFactory) {}

  store() {
    return {
      books: this.factory.state(this.allBooks$),
    };
  }
}
