import { Component } from '@angular/core';
import { ListAddedBooksComponent } from '../../ui/blocks/list-added-books/list-added-books.component';

@Component({
  selector: 'app-list-added-books-container',
  standalone: true,
  imports: [ListAddedBooksComponent],
  templateUrl: './list-added-books-container.component.html',
})
export class ListAddedBooksContainerComponent {

}
