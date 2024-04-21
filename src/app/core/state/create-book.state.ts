import { Injectable } from '@angular/core';
import { StateFactory } from './factory.state';
import { BehaviorSubject } from 'rxjs';
import { IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class CreateBookState {
  private createdBook$: BehaviorSubject<IBook> = new BehaviorSubject<IBook>(
    null
  );

  constructor(private readonly factory: StateFactory) {}

  store() {
    return {
      createdBook: this.factory.state(this.createdBook$),
    };
  }
}
