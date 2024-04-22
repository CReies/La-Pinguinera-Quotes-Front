import { Injectable } from '@angular/core';
import { StateFactory } from './factory.state';
import { BehaviorSubject } from 'rxjs';
import { IBudgetQuoteResponse } from '../models/budget-quote-response.model';

@Injectable({
  providedIn: 'root',
})
export class QuoteBudgetDataState {
  private data$: BehaviorSubject<IBudgetQuoteResponse> =
    new BehaviorSubject<IBudgetQuoteResponse>(null);

  constructor(private readonly factory: StateFactory) {}

  store() {
    return {
      data: this.factory.state(this.data$),
    };
  }
}
