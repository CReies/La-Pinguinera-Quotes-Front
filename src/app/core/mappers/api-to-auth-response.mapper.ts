import { Injectable } from '@angular/core';
import { IAuthResponse } from '../models/auth-response.model';

@Injectable({ providedIn: 'root' })
export class ApiToAuthResponseMapper {
  map(payload: any): IAuthResponse {
    return {
      token: payload.token,
    };
  }
}
