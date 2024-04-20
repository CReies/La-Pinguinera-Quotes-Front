import { LayoutMainComponent } from './../ui/layouts/layout-main/layout-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { privateGuard } from './private.guard';
import { BooksContainerComponent } from '../containers/books-container/books-container.component';
import { AddBookContainerComponent } from '../containers/add-book-container/add-book-container.component';
import { LayoutAddBookComponent } from '../ui/layouts/layout-add-book/layout-add-book.component';
import { BookDisplayContainerComponent } from '../containers/book-display-container/book-display-container.component';

const routes: Routes = [
  {
    path: 'home',
    component: LayoutMainComponent,
    canActivate: [privateGuard],
    children: [
      { path: '', component: BooksContainerComponent, outlet: 'main' },
    ],
  },
  {
    path: 'create-book',
    component: LayoutAddBookComponent,
    canActivate: [privateGuard],
    children: [
      {
        path: '',
        component: AddBookContainerComponent,
        outlet: 'add-book-form',
      },
      {
        path: '',
        component: BookDisplayContainerComponent,
        outlet: 'book-display',
      },
    ],
  },
  {
    path: 'list',
    component: LayoutMainComponent,
    canActivate: [privateGuard],
  },
  {
    path: 'budget',
    component: LayoutMainComponent,
    canActivate: [privateGuard],
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
