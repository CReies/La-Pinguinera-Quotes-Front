import { IListQuoteResponse } from './list-quote-response.model';

export interface IBudgetQuoteResponse {
  quote: IListQuoteResponse;
  restBudget: number;
}
