import { Component, Input } from '@angular/core';
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
  @Input() renderAs: 'list' | 'added' ;
  @Input() quantity: number;
}
