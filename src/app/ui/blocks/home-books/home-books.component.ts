import { Component, Input, input } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { IBook } from '../../../core/models/book.model';

@Component({
  selector: 'app-home-books',
  standalone: true,
  imports: [BookCardComponent],
  templateUrl: './home-books.component.html',
  styleUrl: './home-books.component.css'
})
export class HomeBooksComponent {
 @Input() books: IBook[]
}
