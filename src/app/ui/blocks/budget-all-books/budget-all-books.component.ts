import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../../../core/models/book.model';
import { TitleComponent } from '../../elements/title/title.component';
import { BookListElementComponent } from '../book-list-element/book-list-element.component';

@Component({
  selector: 'app-budget-all-books',
  standalone: true,
  imports: [TitleComponent, BookListElementComponent],
  templateUrl: './budget-all-books.component.html',
  styleUrl: './budget-all-books.component.css',
})
export class BudgetAllBooksComponent {
  @Input() books: IBook[];

  @Output() addBook = new EventEmitter<IBook>();
  @Output() removeBook = new EventEmitter<IBook>();

  onAddBook(book: IBook): void {
    this.addBook.emit(book);
  }

  onRemoveBook(book: IBook): void {
    this.removeBook.emit(book);
  }
}
