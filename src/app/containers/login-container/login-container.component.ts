import { Component } from '@angular/core';
import { LoginComponent } from '../../ui/forms/login/login.component';

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login-container.component.html',
})
export class LoginContainerComponent {}
