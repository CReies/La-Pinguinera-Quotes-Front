import { Component } from '@angular/core';
import { AddBookComponent } from '../../ui/forms/add-book/add-book.component';
import { BookCardComponent } from '../../ui/blocks/book-card/book-card.component';
import { IBook } from '../../core/models/book.model';
import { AddBookContainerFacade } from './add-book-container.facade';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-add-book-container',
  standalone: true,
  imports: [AddBookComponent, BookCardComponent, AsyncPipe],
  templateUrl: './add-book-container.component.html',
})
export class AddBookContainerComponent {
  book$: Observable<IBook>;

  constructor(private readonly facade: AddBookContainerFacade) {}

  ngOnInit(): void {
    this.facade.initSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions;
  }

  createBook(formData: IBook): void {
    this.facade.createBook({
      ...formData,
      type: formData.type === 'Book' ? 0 : 1,
    });
    this.book$ = this.facade.book$();
  }
}
