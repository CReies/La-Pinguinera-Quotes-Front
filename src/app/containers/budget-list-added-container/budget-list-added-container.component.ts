import { Component } from '@angular/core';
import { BudgetListAddedBooksComponent } from '../../ui/blocks/budget-list-added-books/budget-list-added-books.component';

@Component({
  selector: 'app-budget-list-added-container',
  standalone: true,
  imports: [BudgetListAddedBooksComponent],
  templateUrl: './budget-list-added-container.component.html',
})
export class BudgetListAddedContainerComponent {}
