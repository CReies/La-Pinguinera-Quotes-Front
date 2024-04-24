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
export class BookCardComponent implements OnInit {
  @Input() book: IBook;

  parsedPrice: number;
  parsedType: string;

  ngOnInit(): void {
    this.parsedPrice = Math.round(this.book.price * 100) / 100;
    let types: IBook['type'][] = ['Book', 'Novel'];

    this.parsedType = types[this.book.type];
  }
}
