import { Component, OnDestroy, OnInit } from '@angular/core';
import { RegisterComponent } from '../../ui/forms/register/register.component';
import { RegisterContainerFacade } from './register-container.facade';

@Component({
  selector: 'app-register-container',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './register-container.component.html',
})
export class RegisterContainerComponent implements OnInit, OnDestroy {
  constructor(private readonly facade: RegisterContainerFacade) {}

  ngOnInit(): void {
    this.facade.initSubscriptions();
  }

  saveState(formData): void {
    this.facade.register(formData);
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions;
  }
}
