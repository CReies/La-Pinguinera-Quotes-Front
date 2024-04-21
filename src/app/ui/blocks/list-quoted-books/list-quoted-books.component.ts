import { Component, Input } from '@angular/core';
import { IBook } from '../../../core/models/book.model';
import { TitleComponent } from '../../elements/title/title.component';
import { BookListElementComponent } from '../book-list-element/book-list-element.component';
import { IListQuoteResponse } from '../../../core/models/list-quote-response.model';

@Component({
  selector: 'app-list-quoted-books',
  standalone: true,
  imports: [TitleComponent, BookListElementComponent],
  templateUrl: './list-quoted-books.component.html',
  styleUrl: './list-quoted-books.component.css',
})
export class ListQuotedBooksComponent {
  @Input() quoteData: IListQuoteResponse;
}
