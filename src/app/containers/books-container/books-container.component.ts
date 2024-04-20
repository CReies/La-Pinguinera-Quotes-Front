import { Component } from '@angular/core';
import { BookCardComponent } from '../../ui/blocks/book-card/book-card.component';
import { IBook } from '../../core/models/book.model';

@Component({
  selector: 'app-books-container',
  standalone: true,
  imports: [BookCardComponent],
  templateUrl: './books-container.component.html',
  styles: ``,
})
export class BooksContainerComponent {
  books: IBook[] = [
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: 10,
      type: 'Novel',
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: 10,
      type: 'Novel',
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: 10,
      type: 'Novel',
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: 10,
      type: 'Novel',
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: 10,
      type: 'Novel',
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: 10,
      type: 'Novel',
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: 10,
      type: 'Novel',
    },
  ];
}
