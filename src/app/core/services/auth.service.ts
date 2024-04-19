import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { ApiToAuthResponseMapper } from '../mappers/api-to-auth-response.mapper';
import { Observable, map } from 'rxjs';
import { URL_RESOURCES } from '../resources/url.resources';
import { IAuthResponseModel } from '../models/auth-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: ApiToAuthResponseMapper
  ) {}

  login(formData): Observable<IAuthResponseModel> {
    const url = URL_RESOURCES.login;
    return this.httpService.post<IAuthResponseModel>(url, formData).pipe(
      map((response) => {
        console.log(response);
        return this.mapper.map(response);
      })
    );
  }
}
