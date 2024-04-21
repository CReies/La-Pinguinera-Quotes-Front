import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { AppState } from '../../core/state/app.state';
import { IBook } from '../../core/models/book.model';
import { QuoteCreateService } from '../../core/services/quote.create.service';

@Injectable({
  providedIn: 'root',
})
export class AddBookContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly appState: AppState,
    private readonly createBookService: QuoteCreateService
  ) {}

  book$(): Observable<IBook> {
    return this.appState.createdBook.createdBook.$();
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  createBook(data: IBook): void {
    this.subscriptions.add(
      this.createBookService
        .create(data)
        .pipe(tap(this.appState.createdBook.createdBook.set.bind(this)))
        .subscribe()
    );
  }
}
