import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookContainerComponent } from '../containers/add-book-container/add-book-container.component';
import { BooksContainerComponent } from '../containers/books-container/books-container.component';
import { BudgetListAddedContainerComponent } from '../containers/budget-list-added-container/budget-list-added-container.component';
import { BudgetListAllContainerComponent } from '../containers/budget-list-all-container/budget-list-all-container.component';
import { BudgetListQuotedContainerComponent } from '../containers/budget-list-quoted-container/budget-list-quoted-container.component';
import { ListAddedBooksContainerComponent } from '../containers/list-added-books-container/list-added-books-container.component';
import { ListAllBooksContainerComponent } from '../containers/list-all-books-container/list-all-books-container.component';
import { ListQuotedBooksContainerComponent } from '../containers/list-quoted-books-container/list-quoted-books-container.component';
import { LayoutListComponent } from '../ui/layouts/layout-list/layout-list.component';
import { LayoutMainComponent } from './../ui/layouts/layout-main/layout-main.component';
import { PrivateGuard } from './private.guard';

const routes: Routes = [
  {
    path: 'home',
    component: LayoutMainComponent,
    canActivate: [PrivateGuard],
    children: [
      { path: '', component: BooksContainerComponent, outlet: 'main' },
    ],
  },
  {
    path: 'create-book',
    component: LayoutMainComponent,
    canActivate: [PrivateGuard],
    children: [
      {
        path: '',
        component: AddBookContainerComponent,
        outlet: 'main',
      },
    ],
  },
  {
    path: 'list',
    component: LayoutListComponent,
    canActivate: [PrivateGuard],
    children: [
      {
        path: '',
        component: ListAllBooksContainerComponent,
        outlet: 'list-all',
      },
      {
        path: '',
        component: ListAddedBooksContainerComponent,
        outlet: 'list-added',
      },
      {
        path: '',
        component: ListQuotedBooksContainerComponent,
        outlet: 'list-quoted',
      },
    ],
  },
  {
    path: 'budget',
    component: LayoutListComponent,
    canActivate: [PrivateGuard],
    children: [
      {
        path: '',
        component: BudgetListAllContainerComponent,
        outlet: 'list-all',
      },
      {
        path: '',
        component: BudgetListAddedContainerComponent,
        outlet: 'list-added',
      },
      {
        path: '',
        component: BudgetListQuotedContainerComponent,
        outlet: 'list-quoted',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
