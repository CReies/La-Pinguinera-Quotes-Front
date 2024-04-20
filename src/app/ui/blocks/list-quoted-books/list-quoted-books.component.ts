import { Component } from '@angular/core';
import { IBook } from '../../../core/models/book.model';
import { TitleComponent } from '../../elements/title/title.component';
import { BookListElementComponent } from '../book-list-element/book-list-element.component';

@Component({
  selector: 'app-list-quoted-books',
  standalone: true,
  imports: [TitleComponent, BookListElementComponent],
  templateUrl: './list-quoted-books.component.html',
  styleUrl: './list-quoted-books.component.css',
})
export class ListQuotedBooksComponent {
  books: IBook[] = [
    {
      title: 'Book 1',
      author: 'Author 1',
      price: 10,
      type: 'Novel',
    },
    {
      title: 'Book 1',
      author: 'Author 1',
      price: 10,
      type: 'Novel',
    },
    {
      title: 'Book 1',
      author: 'Author 1',
      price: 10,
      type: 'Novel',
    },
    {
      title: 'Book 1',
      author: 'Author 1',
      price: 10,
      type: 'Novel',
    },
    {
      title: 'Book 1',
      author: 'Author 1',
      price: 10,
      type: 'Novel',
    },
  ];
}
