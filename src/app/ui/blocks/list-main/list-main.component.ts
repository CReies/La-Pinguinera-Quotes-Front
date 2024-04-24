import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListAllBooksComponent } from '../list-all-books/list-all-books.component';
import { ListAddedBooksComponent } from '../list-added-books/list-added-books.component';
import { ListQuotedBooksComponent } from '../list-quoted-books/list-quoted-books.component';
import { IBook } from '../../../core/models/book.model';
import { IBookWithQuantity } from '../../../core/models/book-with-quantity.model';
import { IListQuoteResponse } from '../../../core/models/list-quote-response.model';

@Component({
  selector: 'app-list-main',
  standalone: true,
  imports: [
    ListAllBooksComponent,
    ListAddedBooksComponent,
    ListQuotedBooksComponent,
  ],
  templateUrl: './list-main.component.html',
  styleUrl: './list-main.component.css',
})
export class ListMainComponent {
  @Input() books: IBook[];
  @Input() cartList: IBookWithQuantity[];
  @Input() quoteData: IListQuoteResponse;

  @Output() onAddBook: EventEmitter<IBook> = new EventEmitter<IBook>();
  @Output() onRemoveBook: EventEmitter<IBook> = new EventEmitter<IBook>();
  @Output() onQuote: EventEmitter<void> = new EventEmitter<void>();

  addBook(book: IBook) {
    this.onAddBook.emit(book);
  }

  removeBook(book: IBook) {
    this.onRemoveBook.emit(book);
  }

  quote() {
    this.onQuote.emit();
  }
}
