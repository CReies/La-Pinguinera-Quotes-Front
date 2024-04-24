import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBookWithQuantity } from '../../core/models/book-with-quantity.model';
import { IBook } from '../../core/models/book.model';
import { ListMainComponent } from '../../ui/blocks/list-main/list-main.component';
import { IListQuoteResponse } from './../../core/models/list-quote-response.model';
import { ListQuoteContainerFacade } from './list-quote-container.facade';

@Component({
  selector: 'app-list-quote-container',
  standalone: true,
  imports: [ListMainComponent, AsyncPipe],
  templateUrl: './list-quote-container.component.html',
})
export class ListQuoteContainerComponent implements OnInit, OnDestroy {
  public books$: Observable<IBook[]>;
  public cartList$: Observable<IBookWithQuantity[]>;
  public quoteData$: Observable<IListQuoteResponse>;

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
    this.cartList$ = this.facade.cartList$();
    this.quoteData$ = this.facade.quoteData$();
  }

  addBook(book: IBook): void {
    this.facade.addBook(book);
  }

  removeBook(book: IBook): void {
    this.facade.removeBook(book);
  }

  quote(): void {
    this.facade.quote();
  }
}
