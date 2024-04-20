import { Component } from '@angular/core';
import { ListAllBooksComponent } from '../../ui/blocks/list-all-books/list-all-books.component';

@Component({
  selector: 'app-list-all-books-container',
  standalone: true,
  imports: [ListAllBooksComponent],
  templateUrl: './list-all-books-container.component.html',
})
export class ListAllBooksContainerComponent {

}
