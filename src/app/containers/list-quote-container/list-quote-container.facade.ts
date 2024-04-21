import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { AppState } from '../../core/state/app.state';
import { BooksService } from '../../core/services/books.service';
import { IBook } from '../../core/models/book.model';
import { IBookWithQuantity } from '../../core/models/book-with-quantity.model';
import { QuoteListService } from '../../core/services/quote.list.service';
import { IListQuoteResponse } from '../../core/models/list-quote-response.model';

@Injectable({
  providedIn: 'root',
})
export class ListQuoteContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly appState: AppState,
    private readonly booksService: BooksService,
    private readonly quoteListService: QuoteListService
  ) {}

  books$(): Observable<IBook[]> {
    return this.appState.books.books.$();
  }

  cartList$(): Observable<IBookWithQuantity[]> {
    return this.appState.listCart.books.$();
  }

  quoteData$(): Observable<IListQuoteResponse> {
    return this.appState.quoteListData.data.$();
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  getBooks(): void {
    this.subscriptions.add(
      this.booksService
        .getAll()
        .pipe(tap(this.appState.books.books.set.bind(this)))
        .subscribe()
    );
  }

  addBook(book: IBook) {
    let listCartState = this.appState.listCart.books.snapshot();
    let bookWithQuantity = listCartState.find(
      (element) => element.id === book.id
    );
    if (bookWithQuantity) {
      bookWithQuantity.quantity += 1;
    } else {
      listCartState.push({ ...book, quantity: 1 });
    }

    this.appState.listCart.books.set(listCartState);
  }

  removeBook(book: IBook) {
    let listCartState = this.appState.listCart.books.snapshot();
    let bookWithQuantity = listCartState.find(
      (element) => element.id === book.id
    );

    if (!bookWithQuantity) return;

    if (bookWithQuantity.quantity === 1) {
      listCartState = listCartState.filter(
        (element) => element.id !== bookWithQuantity.id
      );
    } else {
      bookWithQuantity.quantity -= 1;
    }

    this.appState.listCart.books.set(listCartState);
  }

  quote() {
    const data = this.appState.listCart.books.snapshot();

    this.subscriptions.add(
      this.quoteListService
        .list(data)
        .pipe(tap(this.appState.quoteListData.data.set.bind(this)))
        .subscribe()
    );
  }
}
