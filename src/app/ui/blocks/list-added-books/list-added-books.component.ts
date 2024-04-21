import { Component, Input } from '@angular/core';
import { IBook } from '../../../core/models/book.model';
import { BookListElementComponent } from '../book-list-element/book-list-element.component';
import { TitleComponent } from '../../elements/title/title.component';
import { IBookWithQuantity } from '../../../core/models/book-with-quantity.model';

@Component({
  selector: 'app-list-added-books',
  standalone: true,
  imports: [BookListElementComponent, TitleComponent],
  templateUrl: './list-added-books.component.html',
  styleUrl: './list-added-books.component.css',
})
export class ListAddedBooksComponent {
  @Input() books: IBookWithQuantity[];
}
