import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { tap } from 'rxjs';
import { TokenService } from './../../core/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  canActivate: CanActivateFn;
  result: boolean = true;

  constructor(private readonly tokenService: TokenService) {
    this.canActivate = (route, state) => {
      console.log('a');
      this.tokenService
        .verifyToken()
        .pipe(
          tap((response) => {
            console.log(response);
            console.log(response.verify == null);
            response.verify == undefined
              ? (this.result = true)
              : (this.result = false);
          })
        )
        .subscribe();
      console.log('asdasdasr', this.result);

      return this.result;
    };
  }
}
