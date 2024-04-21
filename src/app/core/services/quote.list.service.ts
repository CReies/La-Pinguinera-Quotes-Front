import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { Observable, map } from 'rxjs';
import { URL_RESOURCES } from '../resources/url.resources';
import { IListQuoteResponse } from '../models/list-quote-response.model';
import { ApiToListQuoteResponseMapper } from '../mappers/api-to-list-quote-response.mapper';

@Injectable({
  providedIn: 'root',
})
export class QuoteListService {
  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: ApiToListQuoteResponseMapper
  ) {}

  list(data): Observable<IListQuoteResponse> {
    const url = URL_RESOURCES.quote.list;
    const result = this.httpService.post<IListQuoteResponse>(url, data).pipe(
      map((response) => {
        return this.mapper.map(response);
      })
    );

    return result;
  }
}
