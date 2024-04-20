import { LayoutMainComponent } from './../ui/layouts/layout-main/layout-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { privateGuard } from './private.guard';

const routes: Routes = [
  {
    path: 'home',
    component: LayoutMainComponent,
    canActivate: [privateGuard],
  },
  {
    path: 'create-book',
    component: LayoutMainComponent,
    canActivate: [privateGuard],
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
