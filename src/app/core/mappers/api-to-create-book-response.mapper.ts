import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';

@Injectable({ providedIn: 'root' })
export class ApiToCreateBookResponseMapper {
  map(payload: any): IBook {
    const typeArray: IBook['type'][] = ['Book', 'Novel'];
    const type: IBook['type'] = typeArray[payload.type];
    return {
      title: payload.title,
      author: payload.author,
      price: payload.sellPrice,
      type,
    };
  }
}
