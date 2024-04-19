import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { ApiToAuthResponseMapper } from '../mappers/api-to-auth-response.mapper';
import { Observable, map } from 'rxjs';
import { IAuthResponse } from '../models/auth-response.model';
import { URL_RESOURCES } from '../resources/url.resources';

@Injectable({
  providedIn: 'root',
})
export class AuthResponseService {
  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: ApiToAuthResponseMapper
  ) {}

  login(): Observable<IAuthResponse> {
    const url = URL_RESOURCES.login;
    return this.httpService
      .get<IAuthResponse>(url)
      .pipe(map((response) => this.mapper.map(response)));
  }
}
