import {Injectable} from '@angular/core';
import{CanActivate,
       Router,
       ActivatedRouteSnapshot,
       RouterStateSnapshot,
       CanActivateChild
        } 
        from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{
    constructor(private authService:AuthService,private router:Router){

    }
    
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        let url:string=state.url;
        console.log("AuthGaurd#CanActivate called");
        return this.checkLoginUrl(url);
        
        
    }
    canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        return this.canActivate(route,state);
    }
    checkLoginUrl(url:string):boolean{
        if(this.authService.isLoggesIn){
            return true;
        }
        this.authService.redirectUrl=url;
        this.router.navigate(['/login']);
        return false;
    }
}



