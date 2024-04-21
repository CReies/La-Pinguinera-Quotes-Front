import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { ApiToCreateBookResponseMapper } from '../mappers/api-to-create-book-response.mapper';
import { Observable, map } from 'rxjs';
import { IBook } from '../models/book.model';
import { URL_RESOURCES } from '../resources/url.resources';

@Injectable({
  providedIn: 'root',
})
export class QuoteCreateService {
  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: ApiToCreateBookResponseMapper
  ) {}

  create(data): Observable<IBook> {
    console.log(data);
    const url = URL_RESOURCES.quote.create;
    const result = this.httpService.post<IBook>(url, data).pipe(
      map((response) => {
        console.log(response);
        return this.mapper.map(response);
      })
    );

    return result;
  }
}
