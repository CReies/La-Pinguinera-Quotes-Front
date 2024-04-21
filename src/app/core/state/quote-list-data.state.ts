import { Injectable } from '@angular/core';
import { StateFactory } from './factory.state';
import { BehaviorSubject } from 'rxjs';
import { IListQuoteResponse } from '../models/list-quote-response.model';

@Injectable({
  providedIn: 'root',
})
export class QuoteListDataState {
  private data$: BehaviorSubject<IListQuoteResponse> =
    new BehaviorSubject<IListQuoteResponse>(null);

  constructor(private readonly factory: StateFactory) {}

  store() {
    return {
      data: this.factory.state(this.data$),
    };
  }
}
