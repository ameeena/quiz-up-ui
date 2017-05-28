import {Component} from '@angular/core';
import {Users} from '../../Model/users.model';
import {UserService} from '../../services/users.service';
import {Router} from '@angular/router';


@Component({
    moduleId:module.id,    
    templateUrl:'signup.component.html',
    styleUrls:['signup.component.scss'],    
    providers:[UserService],
})

export class SignupComponent{

    users:Users[];
    
    errorMessage: string;
    userName:string;
    userEmail:string;
    userPassword:string;
    confirmPassword:string;
    userScore:number;
    isLoggedIn:boolean;

    teamName:string;
    

    loginUserName:string;
    loginUserPassword:string;
    
    user:string;
    listOfTeams:string[]=["Ninjas","Immortals","Samurais","Shoguns","Vikings","Gladiators","Centurions","Aztecs"];
    // userLoginName:string;
    // userLoginPassword:string;
   constructor(private userService:UserService,private _router:Router){

   }
    registerUser(even:any){
      event.preventDefault(); 
      
      var newUser:any={
          userName:this.userName,
          userEmail:this.userEmail,
          userPassword:this.userPassword,
          userScore:0,
          isLoggedIn:false,
          teamName:this.teamName
          
              }      
      var data= this.userService.signup(newUser)
      .subscribe(result=>this._router.navigate(['/home',{outlets: {'router1':['quizUp'] }}]),
      error=>this.errorMessage=error);
  }
}
