import { Component } from '@angular/core';
import { BudgetListQuotedBooksComponent } from '../../ui/blocks/budget-list-quoted-books/budget-list-quoted-books.component';

@Component({
  selector: 'app-budget-list-quoted-container',
  standalone: true,
  imports: [BudgetListQuotedBooksComponent],
  templateUrl: './budget-list-quoted-container.component.html',
})
export class BudgetListQuotedContainerComponent {}
