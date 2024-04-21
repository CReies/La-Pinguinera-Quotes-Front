import { ListCartState } from './list-cart.state';
import { BooksState } from './books.state';
import { CreateBookState } from './create-book.state';
import { UserState } from './user.state';
import { Injectable } from '@angular/core';
import { QuoteListDataState } from './quote-list-data.state';

@Injectable({ providedIn: 'root' })
export class AppState {
  constructor(
    private readonly userState: UserState,
    private readonly booksState: BooksState,
    private readonly createdBookState: CreateBookState,
    private readonly listCartState: ListCartState,
    private readonly quoteListDataState: QuoteListDataState
  ) {}

  get user() {
    return this.userState.store();
  }

  get books() {
    return this.booksState.store();
  }

  get createdBook() {
    return this.createdBookState.store();
  }

  get listCart() {
    return this.listCartState.store();
  }

  get quoteListData() {
    return this.quoteListDataState.store();
  }
}
