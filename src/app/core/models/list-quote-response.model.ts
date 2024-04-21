import { IBook } from './book.model';

export interface IListQuoteResponse {
  books: IBook[];
  totalPrice: number;
}
