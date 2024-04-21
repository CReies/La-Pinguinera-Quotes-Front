import { IBook } from './book.model';

export interface IBudgetQuoteRequest {
  BookIds: IBook['id'][];
  budget: number;
}
