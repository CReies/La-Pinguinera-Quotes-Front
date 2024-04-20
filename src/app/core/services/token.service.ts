import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiToVerifyTokenResponseMapper } from '../mappers/api-to-verify-token.mapper';
import { IVerifyTokenResponseModel } from '../models/verify-token-response.model';
import { URL_RESOURCES } from '../resources/url.resources';
import { HttpService } from './generals/http.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: ApiToVerifyTokenResponseMapper
  ) {}

  verifyToken(): Observable<IVerifyTokenResponseModel> {
    const url = URL_RESOURCES.verifyToken;
    const result = this.httpService
      .get<IVerifyTokenResponseModel>(url)
      .pipe(map((response) => this.mapper.map(response)));

    return result;
  }
}
