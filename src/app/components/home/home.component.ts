import {Component,OnInit} from '@angular/core';
import {UserService} from '../../services/users.service';
import {Router} from '@angular/router';


@Component({
    moduleId:module.id,
    templateUrl:'home.component.html',
    styleUrls:['home.component.scss'],
})
export class HomeComponent implements OnInit{
    islogged:boolean;
    isAdmin:boolean=false;
    username:string;
    constructor(private userService:UserService, private router:Router){
        // this.islogged= userService.isLoggedIn();   
        let authToken=localStorage.getItem('auth_token');
        this.username=authToken;
        if(authToken=="ili5kor"){
            this.isAdmin=true;
        }        
    }
    logout(){
        this.userService.logout();
        // this.router.navigate(['/quizStart'])
    }
     ngOnInit(){
       if(!this.userService.isLoggedIn()){
            this.router.navigate(['/quizStart']);
       }
           
   }
}