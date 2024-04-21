import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBook } from '../../core/models/book.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ListAllBooksComponent } from '../../ui/blocks/list-all-books/list-all-books.component';
import { ListAddedBooksComponent } from '../../ui/blocks/list-added-books/list-added-books.component';
import { ListQuotedBooksComponent } from '../../ui/blocks/list-quoted-books/list-quoted-books.component';
import { ListQuoteContainerFacade } from './list-quote-container.facade';

@Component({
  selector: 'app-list-quote-container',
  standalone: true,
  imports: [
    ListAllBooksComponent,
    ListAddedBooksComponent,
    ListQuotedBooksComponent,
    AsyncPipe,
  ],
  templateUrl: './list-quote-container.component.html',
})
export class ListQuoteContainerComponent implements OnInit, OnDestroy {
  public books$: Observable<IBook[]>;

  constructor(private readonly facade: ListQuoteContainerFacade) {}

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.getBooks();
    this.initializeSubscriptions();
  }
  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.books$ = this.facade.books$();
  }

  addBook(book: IBook): void {
    this.facade.addBook(book);
  }

  removeBook(book: IBook): void {
    this.facade.removeBook(book);
  }
}
