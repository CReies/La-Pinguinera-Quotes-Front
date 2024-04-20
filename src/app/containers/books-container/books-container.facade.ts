import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { AppState } from '../../core/state/app.state';
import { BooksService } from '../../core/services/books.service';
import { IBook } from '../../core/models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksContainerFacade {
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
}
