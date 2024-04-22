import { Injectable } from '@angular/core';
import { StateFactory } from './factory.state';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowResponsiveAsideState {
  private show$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(private readonly factory: StateFactory) {}

  store() {
    return {
      show: this.factory.state(this.show$),
    };
  }
}
