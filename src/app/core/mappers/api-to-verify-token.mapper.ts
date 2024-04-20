import { Injectable } from '@angular/core';
import { IVerifyTokenResponseModel } from '../models/verify-token-response.model';

@Injectable({ providedIn: 'root' })
export class ApiToVerifyTokenResponseMapper {
  map(payload: any): IVerifyTokenResponseModel {
    return {
      verify: payload.verify,
    };
  }
}
