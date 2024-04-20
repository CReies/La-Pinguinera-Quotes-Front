import { Injectable } from '@angular/core';
import { ApiToGetAllAllBooksMapper } from '../mappers/api-to-get-all-books-response.mapper';
import { HttpService } from './generals/http.service';
import { Observable, map } from 'rxjs';
import { IBook } from '../models/book.model';
import { URL_RESOURCES } from '../resources/url.resources';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(
    private readonly httpService: HttpService,
    private readonly getAllMapper: ApiToGetAllAllBooksMapper
  ) {}

  getAll(): Observable<IBook[]> {
    const url = URL_RESOURCES.books.getAll;
    const result = this.httpService
      .get<IBook[]>(url)
      .pipe(map((response) => this.getAllMapper.map(response)));
      
    return result;
  }
}
