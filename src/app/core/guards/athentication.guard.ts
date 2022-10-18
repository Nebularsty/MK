import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AthenticationGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = localStorage.getItem('auth_user');

    const credential: any = JSON.parse(user!);

    const expirationTime = credential.user.stsTokenManager.expirationTime;
    const dataAtual = new Date().getTime();

    if (user === null) {
      return false;
    }

    if (dataAtual > expirationTime) {
      console.log('Token expirou');
      return false;
    }

    console.log('Logado e permitido acesso');

    return true;
  }
}
