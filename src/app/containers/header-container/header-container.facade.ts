import { StorageService } from './../../core/services/generals/storage.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { AppState } from '../../core/state/app.state';
import { IAuthResponseModel } from '../../core/models/auth-response.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly appState: AppState,
    private readonly router: Router,
    private readonly storageService: StorageService
  ) {}

  userData$(): Observable<IAuthResponseModel> {
    return this.appState.user.currentUser.$();
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  logout() {
    this.storageService.remove('TOKEN');
    this.appState.user.currentUser.set(null);
    this.router.navigate(['/auth/login']);
  }
}
