import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BudgetAllBooksComponent } from '../budget-all-books/budget-all-books.component';
import { BudgetAddedBooksComponent } from '../budget-added-books/budget-added-books.component';
import { SendBudgetDataComponent } from '../../forms/send-budget-data/send-budget-data.component';
import { BudgetQuotedBooksComponent } from '../budget-quoted-books/budget-quoted-books.component';
import { IBook } from '../../../core/models/book.model';
import { IBudgetQuoteResponse } from '../../../core/models/budget-quote-response.model';

@Component({
  selector: 'app-budget-main',
  standalone: true,
  imports: [
    BudgetAllBooksComponent,
    BudgetAddedBooksComponent,
    SendBudgetDataComponent,
    BudgetQuotedBooksComponent,
  ],
  templateUrl: './budget-main.component.html',
  styleUrl: './budget-main.component.css',
})
export class BudgetMainComponent {
  @Input() books: IBook[];
  @Input() cartBudget: IBook[];
  @Input() quoteData: IBudgetQuoteResponse;

  @Output() onAddBook: EventEmitter<IBook> = new EventEmitter<IBook>();
  @Output() onRemoveBook: EventEmitter<IBook> = new EventEmitter<IBook>();
  @Output() onQuote: EventEmitter<number> = new EventEmitter<number>();

  addBook($event: IBook): void {
    this.onAddBook.emit($event);
  }

  removeBook($event: IBook): void {
    this.onRemoveBook.emit($event);
  }

  quote($event: number): void {
    this.onQuote.emit($event);
  }
}
