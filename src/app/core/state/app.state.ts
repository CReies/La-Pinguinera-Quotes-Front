import { BooksState } from './books.state';
import { UserState } from './user.state';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppState {
  constructor(
    private readonly userState: UserState,
    private readonly booksState: BooksState
  ) {}

  get user() {
    return this.userState.store();
  }

  get books() {
    return this.booksState.store();
  }
}
