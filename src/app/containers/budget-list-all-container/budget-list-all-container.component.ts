// import { Component } from '@angular/core';
// import { BudgetListAllBooksComponent } from '../../ui/blocks/budget-list-all-books/budget-list-all-books.component';

// @Component({
//   selector: 'app-budget-list-all-container',
//   standalone: true,
//   imports: [BudgetListAllBooksComponent],
//   templateUrl: './budget-list-all-container.component.html',
// })
// export class BudgetListAllContainerComponent {}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBook } from '../../core/models/book.model';
import { Observable } from 'rxjs';
import { HomeBooksComponent } from '../../ui/blocks/home-books/home-books.component';
import { AsyncPipe } from '@angular/common';
import { BudgetListAllContainerFacade } from './budget-list-all-container.facade';
import { BudgetListAllBooksComponent } from '../../ui/blocks/budget-list-all-books/budget-list-all-books.component';

@Component({
  selector: 'app-books-container',
  standalone: true,
  imports: [BudgetListAllBooksComponent, AsyncPipe],
  templateUrl: './budget-list-all-container.component.html',
})
export class BudgetListAllContainerComponent implements OnInit, OnDestroy {
  public books$: Observable<IBook[]>;

  constructor(private readonly facade: BudgetListAllContainerFacade) {}

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
