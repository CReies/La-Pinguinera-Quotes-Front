import { Router } from '@angular/router';
import { AuthService } from './../../core/services/auth.service';
import { AppState } from './../../core/state/app.state';
import { Injectable } from '@angular/core';
import { Subscription, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RegisterContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly appState: AppState,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  register(formData): void {
    this.subscriptions.add(
      this.authService
        .register(formData)
        .pipe(tap(this.appState.user.currentUser.set.bind(this)), tap(()=> this.router.navigate(['/quotes/home'])))
        .subscribe()
    );
  }
}
