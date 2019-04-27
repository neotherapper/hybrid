import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserFacade } from '../state/user/user.facade';
import { Observable, of } from 'rxjs';
import { take, map, switchMap, catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userFacade: UserFacade
  ) {}

  getUsers(): Observable<any> {
    return this.userFacade.user$
      .pipe(
        tap( (user) => {
          if (!user) {
            this.userFacade.loadUser();
          }
        }),
        take(1)
      )
  }

  canActivate (): Observable<boolean> {
    return this.getUsers()
      .pipe(
        // if true means that is authenticated
        // so we need to return false for no-auth guard
        switchMap(() => {
          this.router.navigateByUrl('/home');
          return of(false)
        }),
        catchError(() => of(true))
      )
  }

}
