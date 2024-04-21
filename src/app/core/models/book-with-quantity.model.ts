import { IBook } from './book.model';

export interface IBookWithQuantity extends IBook {
  quantity: number;
}
