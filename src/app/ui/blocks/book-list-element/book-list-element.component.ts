import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../../../core/models/book.model';

@Component({
  selector: 'app-book-list-element',
  standalone: true,
  imports: [],
  templateUrl: './book-list-element.component.html',
  styleUrl: './book-list-element.component.css',
})
export class BookListElementComponent {
  @Input() book: IBook;
  @Input() renderAs: 'list' | 'added';
  @Input() quantity: number = 1;

  @Output() addBook = new EventEmitter<IBook>();
  @Output() removeBook = new EventEmitter<IBook>();

  typeParsed: string;
  priceParsed: number;

  onAddBook(): void {
    this.addBook.emit(this.book);
  }

  onRemoveBook(): void {
    this.removeBook.emit(this.book);
  }

  ngOnInit(): void {
    let types: IBook['type'][] = ['Book', 'Novel'];
    this.typeParsed = types[this.book.type];

    this.priceParsed = Math.round(this.book.price * this.quantity * 100) / 100;
  }
}
