import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AsideContainerFacade {
  private subscriptions: Subscription;

  constructor(private readonly appState: AppState) {}

  showAside$(): Observable<boolean> {
    return this.appState.showResponsiveAside.show.$()
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  toggleAside(show: boolean) {
    this.appState.showResponsiveAside.show.set(show);
  }
}
