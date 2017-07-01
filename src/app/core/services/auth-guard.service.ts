import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';
import { UserService } from './users.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor( private router: Router, private userServive: UserService) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        console.log('AuthGaurd#CanActivate called');
        return this.checkLoginUrl(url);
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
    checkLoginUrl(url: string): boolean {
        if (this.userServive.isLoggedIn){
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}



