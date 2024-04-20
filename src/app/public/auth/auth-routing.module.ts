import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthComponent } from '../../ui/layouts/layout-auth/layout-auth.component';
import { LoginContainerComponent } from '../../containers/login-container/login-container.component';
import { RegisterContainerComponent } from '../../containers/register-container/register-container.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LayoutAuthComponent,
    children: [
      { path: '', component: LoginContainerComponent, outlet: 'auth-form' },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: LayoutAuthComponent,
    children: [
      { path: '', component: RegisterContainerComponent, outlet: 'auth-form' },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
