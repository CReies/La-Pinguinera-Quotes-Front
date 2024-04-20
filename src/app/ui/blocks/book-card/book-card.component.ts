import { Component, Input, OnInit } from '@angular/core';
import { TitleComponent } from '../../elements/title/title.component';
import { IBook } from '../../../core/models/book.model';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css',
})
export class BookCardComponent {
  @Input() book: IBook;
}
