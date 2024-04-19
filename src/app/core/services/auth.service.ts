import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { ApiToAuthResponseMapper } from '../mappers/api-to-auth-response.mapper';
import { Observable, map, pipe, tap } from 'rxjs';
import { URL_RESOURCES } from '../resources/url.resources';
import { IAuthResponseModel } from '../models/auth-response.model';
import { StorageService } from './generals/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly storageService: StorageService,
    private readonly mapper: ApiToAuthResponseMapper
  ) {}

  login(formData): Observable<IAuthResponseModel> {
    const url = URL_RESOURCES.login;
    const result = this.httpService
      .post<IAuthResponseModel>(url, formData)
      .pipe(
        map((response) => this.mapper.map(response)),
        tap((response) => this.storageService.set('TOKEN', response.token))
      );

    return result;
  }

  register(formData): Observable<IAuthResponseModel> {
    const url = URL_RESOURCES.register;
    const result = this.httpService
      .post<IAuthResponseModel>(url, formData)
      .pipe(
        map((response) => this.mapper.map(response)),
        tap((response) => this.storageService.set('TOKEN', response.token))
      );

    return result;
  }
}
