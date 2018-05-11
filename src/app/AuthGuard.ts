import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from './_services/user-service/user.service';
import {StorageService} from './_services/storage-service/storage.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private storage: StorageService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.userService.getUserLoggedIn()) {
      return true
    } else {
      this.router.navigate([ 'login' ]);
      return false;
    }
  }
}
