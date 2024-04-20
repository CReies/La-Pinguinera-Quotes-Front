import { Component } from '@angular/core';
import { ListQuotedBooksComponent } from '../../ui/blocks/list-quoted-books/list-quoted-books.component';

@Component({
  selector: 'app-list-quoted-books-container',
  standalone: true,
  imports: [ListQuotedBooksComponent],
  templateUrl: './list-quoted-books-container.component.html',
})
export class ListQuotedBooksContainerComponent {

}
