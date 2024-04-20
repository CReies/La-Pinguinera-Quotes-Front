import { Component } from '@angular/core';
import { BudgetListAllBooksComponent } from '../../ui/blocks/budget-list-all-books/budget-list-all-books.component';

@Component({
  selector: 'app-budget-list-all-container',
  standalone: true,
  imports: [BudgetListAllBooksComponent],
  templateUrl: './budget-list-all-container.component.html',
})
export class BudgetListAllContainerComponent {}
