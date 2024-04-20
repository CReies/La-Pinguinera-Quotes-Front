import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBook } from '../../core/models/book.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ListAllBooksComponent } from '../../ui/blocks/list-all-books/list-all-books.component';
import { ListAllBooksContainerFacade } from './list-all-books-container.facade';

@Component({
  selector: 'app-list-all-books-container',
  standalone: true,
  imports: [ListAllBooksComponent, AsyncPipe],
  templateUrl: './list-all-books-container.component.html',
})
export class ListAllBooksContainerComponent implements OnInit, OnDestroy {
  public books$: Observable<IBook[]>;

  constructor(private readonly facade: ListAllBooksContainerFacade) {}

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
}
