import { Component } from '@angular/core';
import { IBook } from '../../../core/models/book.model';
import { BookListElementComponent } from '../book-list-element/book-list-element.component';
import { TitleComponent } from '../../elements/title/title.component';

@Component({
  selector: 'app-budget-list-added-books',
  standalone: true,
  imports: [BookListElementComponent, TitleComponent],
  templateUrl: './budget-list-added-books.component.html',
  styleUrl: './budget-list-added-books.component.css',
})
export class BudgetListAddedBooksComponent {
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
