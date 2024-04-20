import { Injectable } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { AppState } from '../../core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class LoginContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly appState: AppState,
    private readonly authService: AuthService
  ) {}

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  login(formData): void {
    this.subscriptions.add(
      this.authService
        .login(formData)
        .pipe(tap(this.appState.user.currentUser.set.bind(this)))
        .subscribe()
    );
  }
}
