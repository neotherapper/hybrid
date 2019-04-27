import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserFacade } from '../state/user/user.facade';
import { Observable, of } from 'rxjs';
import { take, switchMap, catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userFacade: UserFacade
  ) { }

  getUsers(): Observable<any> {
    return this.userFacade.user$
      .pipe(
        tap((user) => {
          if (!user) {
            this.userFacade.loadUser();
          }
        }),
        take(1)
      )
  }

  canActivate(): Observable<boolean> {
    return this.getUsers()
      .pipe(
         // if true means that is authenticated
        // so we need to return true for auth guard
        switchMap(() => of(true)),
        catchError(() => {
          this.router.navigateByUrl('/home');
          return of(false)
        })
      )
  }

}
