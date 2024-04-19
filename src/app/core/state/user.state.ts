import { Injectable } from '@angular/core';
import { StateFactory } from './factory.state';
import { BehaviorSubject } from 'rxjs';
import { IUserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserState {
  private token$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private currentUser$: BehaviorSubject<IUserModel> =
    new BehaviorSubject<IUserModel>(null);
  private isAuthenticated$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(null);

  constructor(private readonly factory: StateFactory) {}

  store() {
    return {
      token: this.factory.state(this.token$),
      currentUser: this.factory.state(this.currentUser$),
      isAuthenticated: this.factory.state(this.isAuthenticated$),
    };
  }
}
