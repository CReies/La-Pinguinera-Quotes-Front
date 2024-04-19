import { UserState } from './user.state';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppState {
  constructor(private readonly userState: UserState) {}

  get user(){
    return this.userState.store()
  }
}
