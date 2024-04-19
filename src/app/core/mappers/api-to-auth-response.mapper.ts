import { Injectable } from '@angular/core';
import { IAuthResponseModel } from '../models/auth-response.model';

@Injectable({ providedIn: 'root' })
export class ApiToAuthResponseMapper {
  map(payload: any): IAuthResponseModel {
    return {
      token: payload.token,
      user: {
        username: payload.customer.username,
        email: payload.customer.email,
      },
    };
  }
}
