import { Injectable } from '@angular/core';
import { StateFactory } from './factory.state';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BudgetCartState {
  private books$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  constructor(private readonly factory: StateFactory) {}

  store() {
    return {
      books: this.factory.state(this.books$),
    };
  }
}
