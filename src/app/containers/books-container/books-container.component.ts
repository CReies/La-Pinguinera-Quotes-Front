import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBook } from '../../core/models/book.model';
import { Observable } from 'rxjs';
import { BooksContainerFacade } from './books-container.facade';
import { HomeBooksComponent } from '../../ui/blocks/home-books/home-books.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-books-container',
  standalone: true,
  imports: [HomeBooksComponent, AsyncPipe],
  templateUrl: './books-container.component.html',
})
export class BooksContainerComponent implements OnInit, OnDestroy {
  public books$: Observable<IBook[]>;

  constructor(private readonly facade: BooksContainerFacade) {}

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.getBooks();
    this.initializeSubscriptions();
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  private initializeSubscriptions(): void {
    this.books$ = this.facade.books$();
  }
}
