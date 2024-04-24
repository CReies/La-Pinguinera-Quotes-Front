import { Component, Input, OnInit } from '@angular/core';
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
export class BudgetQuotedBooksComponent implements OnInit {
  @Input() data: IBudgetQuoteResponse;

  parsedTotalPrice: number;
  parsedRestBudget: number;

  ngOnInit(): void {
    this.parsedTotalPrice = Math.round(this.data.quote.totalPrice * 100) / 100;
    this.parsedRestBudget = Math.round(this.data.restBudget * 100) / 100;
  }
}
