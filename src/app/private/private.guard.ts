import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { TokenService } from '../core/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class PrivateGuard implements CanActivate {
  constructor(private tokenService: TokenService, private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.tokenService.verifyToken().pipe(
      map(() => {
        return true;
      }),
      catchError(() => {
        this.route.navigate(['/auth/login']);
        return of(false);
      })
    );
  }
}
