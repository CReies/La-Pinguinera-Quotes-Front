import { Injectable } from '@angular/core';
import { StateFactory } from './factory.state';
import { BehaviorSubject } from 'rxjs';
import { IAuthResponseModel } from '../models/auth-response.model';

@Injectable({
  providedIn: 'root',
})
export class UserState {
  private currentUser$: BehaviorSubject<IAuthResponseModel> =
    new BehaviorSubject<IAuthResponseModel>(null);

  constructor(private readonly factory: StateFactory) {}

  store() {
    return {
      currentUser: this.factory.state(this.currentUser$),
    };
  }
}
