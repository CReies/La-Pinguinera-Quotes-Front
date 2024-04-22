import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../../../core/models/book.model';
import { TitleComponent } from '../../elements/title/title.component';
import { BookListElementComponent } from '../book-list-element/book-list-element.component';

@Component({
  selector: 'app-budget-added-books',
  standalone: true,
  imports: [TitleComponent, BookListElementComponent],
  templateUrl: './budget-added-books.component.html',
  styleUrl: './budget-added-books.component.css',
})
export class BudgetAddedBooksComponent {
  @Input() books: IBook[];
}
