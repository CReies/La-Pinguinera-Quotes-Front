import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBook } from '../../core/models/book.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { BudgetQuoteContainerFacade } from './budget-quote-container.facade';
import { BudgetAllBooksComponent } from '../../ui/blocks/budget-all-books/budget-all-books.component';
import { BudgetAddedBooksComponent } from '../../ui/blocks/budget-added-books/budget-added-books.component';
import { BudgetQuotedBooksComponent } from '../../ui/blocks/budget-quoted-books/budget-quoted-books.component';

@Component({
  selector: 'app-budget-quote-container',
  standalone: true,
  imports: [
    BudgetAllBooksComponent,
    BudgetAddedBooksComponent,
    BudgetQuotedBooksComponent,
    AsyncPipe,
  ],
  templateUrl: './budget-quote-container.component.html',
})
export class BudgetQuoteContainerComponent implements OnInit, OnDestroy {
  public books$: Observable<IBook[]>;
  public cartBudget$: Observable<IBook[]>;

  constructor(private readonly facade: BudgetQuoteContainerFacade) {}

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.getBooks();
    this.initializeSubscriptions();
  }
  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.books$ = this.facade.books$();
    this.cartBudget$ = this.facade.budgetCart$();
  }

  addBook(book: IBook): void {
    this.facade.addBook(book);
  }

  removeBook(book: IBook): void {
    this.facade.removeBook(book);
  }
}
