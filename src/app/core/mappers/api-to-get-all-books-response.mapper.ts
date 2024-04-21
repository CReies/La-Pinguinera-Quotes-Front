import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';

@Injectable({ providedIn: 'root' })
export class ApiToGetAllAllBooksMapper {
  map(payload: any[]): IBook[] {
    return payload.map((element) => {
      return {
        id: element.id,
        title: element.title,
        author: element.author,
        price: element.price,
        type: element.type,
      };
    });
  }
}
