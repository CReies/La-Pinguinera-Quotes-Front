import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { AppState } from '../../core/state/app.state';
import { BooksService } from '../../core/services/books.service';
import { IBook } from '../../core/models/book.model';

@Injectable({
  providedIn: 'root',
})
export class ListQuoteContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly appState: AppState,
    private readonly booksService: BooksService
  ) {}

  books$(): Observable<IBook[]> {
    return this.appState.books.books.$();
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
}
