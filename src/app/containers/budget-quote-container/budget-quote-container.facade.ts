import { QuoteBudgetService } from './../../core/services/quote.budget.service';
import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { BooksService } from '../../core/services/books.service';
import { AppState } from '../../core/state/app.state';
import { IBook } from './../../core/models/book.model';
import { IBudgetQuoteResponse } from '../../core/models/budget-quote-response.model';

@Injectable({
  providedIn: 'root',
})
export class BudgetQuoteContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly appState: AppState,
    private readonly booksService: BooksService,
    private readonly quoteBudgetService: QuoteBudgetService
  ) {}

  books$(): Observable<IBook[]> {
    return this.appState.books.books.$();
  }

  budgetCart$(): Observable<IBook[]> {
    return this.appState.budgetCart.books.$();
  }

  quoteData$(): Observable<IBudgetQuoteResponse> {
    return this.appState.quoteBudgetData.data.$();
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

  addBook(book: IBook): void {
    let data = this.appState.budgetCart.books.snapshot();

    if (data.find((b) => b.id === book.id)) return;
    data.push(book);

    this.appState.budgetCart.books.set(data);
  }

  removeBook(book: IBook): void {
    let data = this.appState.budgetCart.books.snapshot();

    if (!data.find((b) => b.id === book.id)) return;
    let modifiedData = data.filter((element) => element.id !== book.id);

    this.appState.budgetCart.books.set(modifiedData);
  }

  quote(budget): void {
    let data = this.appState.budgetCart.books.snapshot();

    this.subscriptions.add(
      this.quoteBudgetService
        .budget(data, budget)
        .pipe(tap(this.appState.quoteBudgetData.data.set.bind(this)))
        .subscribe()
    );
  }
}
