import { Component, EventEmitter, Output } from '@angular/core';
import { LoginComponent } from '../../ui/forms/login/login.component';
import { FormBuilder } from '@angular/forms';
import { LoginContainerFacade } from './login-container.facade';

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login-container.component.html',
})
export class LoginContainerComponent {
  constructor(private readonly facade: LoginContainerFacade) {}

  ngOnInit(): void {
    this.facade.initSubscriptions();
  }

  saveState(formData): void {
    this.facade.login(formData);
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions;
  }
}
