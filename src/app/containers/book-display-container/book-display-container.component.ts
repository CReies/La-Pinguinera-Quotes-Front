import { IBook } from './../../core/models/book.model';
import { Component } from '@angular/core';
import { BookCardComponent } from '../../ui/blocks/book-card/book-card.component';

@Component({
  selector: 'app-book-display-container',
  standalone: true,
  imports: [BookCardComponent],
  templateUrl: './book-display-container.component.html',
})
export class BookDisplayContainerComponent {
  book: IBook = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    price: 10,
    type: 'Novel',
  };
}
