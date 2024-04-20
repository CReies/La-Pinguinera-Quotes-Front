import { Component, Input } from '@angular/core';
import { IBook } from '../../../core/models/book.model';
import { TitleComponent } from '../../elements/title/title.component';
import { BookListElementComponent } from '../book-list-element/book-list-element.component';

@Component({
  selector: 'app-budget-list-all-books',
  standalone: true,
  imports: [TitleComponent, BookListElementComponent],
  templateUrl: './budget-list-all-books.component.html',
  styleUrl: './budget-list-all-books.component.css',
})
export class BudgetListAllBooksComponent {
  @Input() books: IBook[];
}
