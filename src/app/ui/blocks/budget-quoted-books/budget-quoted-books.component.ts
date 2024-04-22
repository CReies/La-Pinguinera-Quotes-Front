import { Component, Input } from '@angular/core';
import { IBudgetQuoteResponse } from '../../../core/models/budget-quote-response.model';
import { TitleComponent } from '../../elements/title/title.component';
import { BookListElementComponent } from '../book-list-element/book-list-element.component';

@Component({
  selector: 'app-budget-quoted-books',
  standalone: true,
  imports: [TitleComponent, BookListElementComponent],
  templateUrl: './budget-quoted-books.component.html',
  styleUrl: './budget-quoted-books.component.css',
})
export class BudgetQuotedBooksComponent {
  @Input() data: IBudgetQuoteResponse;
}
