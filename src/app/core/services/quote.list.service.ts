import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { Observable, map } from 'rxjs';
import { URL_RESOURCES } from '../resources/url.resources';
import { IListQuoteResponse } from '../models/list-quote-response.model';
import { ApiToListQuoteResponseMapper } from '../mappers/api-to-list-quote-response.mapper';
import { IBookWithQuantity } from '../models/book-with-quantity.model';
import { ListQuoteToApiMapper } from '../mappers/list-quote-to-api.mapper';

@Injectable({
  providedIn: 'root',
})
export class QuoteListService {
  constructor(
    private readonly httpService: HttpService,
    private readonly requestMapper: ListQuoteToApiMapper,
    private readonly responseMapper: ApiToListQuoteResponseMapper
  ) {}

  list(data: IBookWithQuantity[]): Observable<IListQuoteResponse> {
    const url = URL_RESOURCES.quote.list;
    const parsedData = this.requestMapper.map(data);

    const result = this.httpService
      .post<IListQuoteResponse>(url, parsedData)
      .pipe(
        map((response) => {
          return this.responseMapper.map(response);
        })
      );

    return result;
  }
}
