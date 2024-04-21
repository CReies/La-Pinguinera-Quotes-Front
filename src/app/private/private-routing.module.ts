import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookContainerComponent } from '../containers/add-book-container/add-book-container.component';
import { BooksContainerComponent } from '../containers/books-container/books-container.component';
import { LayoutMainComponent } from './../ui/layouts/layout-main/layout-main.component';
import { PrivateGuard } from './private.guard';
import { ListQuoteContainerComponent } from '../containers/list-quote-container/list-quote-container.component';
import { BudgetQuoteContainerComponent } from '../containers/budget-quote-container/budget-quote-container.component';

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
    component: LayoutMainComponent,
    canActivate: [PrivateGuard],
    children: [
      {
        path: '',
        component: ListQuoteContainerComponent,
        outlet: 'main',
      },
    ],
  },
  {
    path: 'budget',
    component: LayoutMainComponent,
    canActivate: [PrivateGuard],
    children: [
      {
        path: '',
        component: BudgetQuoteContainerComponent,
        outlet: 'main',
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
