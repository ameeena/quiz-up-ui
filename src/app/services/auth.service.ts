import{Injectable} from '@angular/core';
import{Observable} from 'rxjs/observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()

export class AuthService{
    isLoggesIn:boolean=false;

    redirectUrl:string;

    login():Observable<boolean>{
        //check if the user is prsent in the DB
        return Observable.of(true).delay(1000).do(val=>this.isLoggesIn=true);
    }
    logout():void{
        this.isLoggesIn=false;
    }

}