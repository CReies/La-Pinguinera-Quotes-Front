import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthComponent } from '../../ui/layouts/layout-auth/layout-auth.component';
import { LoginComponent } from '../../ui/forms/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LayoutAuthComponent,
    children: [{ path: '', component: LoginComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
