import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { Observable, map } from 'rxjs';
import { URL_RESOURCES } from '../resources/url.resources';
import { BudgetQuoteToApiMapper } from '../mappers/budget-quote-to-api.mapper';
import { ApiToBudgetQuoteResponseMapper } from '../mappers/api-to-budget-quote-response.mapper';
import { IBudgetQuoteResponse } from '../models/budget-quote-response.model';
import { IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class QuoteBudgetService {
  constructor(
    private readonly httpService: HttpService,
    private readonly requestMapper: BudgetQuoteToApiMapper,
    private readonly responseMapper: ApiToBudgetQuoteResponseMapper
  ) {}

  budget(data: IBook[], budget: string): Observable<IBudgetQuoteResponse> {
    const url = URL_RESOURCES.quote.budget;
    const parsedData = this.requestMapper.map(data, budget);

    const result = this.httpService
      .post<IBudgetQuoteResponse>(url, parsedData)
      .pipe(
        map((response) => {
          return this.responseMapper.map(response);
        })
      );

    return result;
  }
}
