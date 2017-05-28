import {Component} from '@angular/core';
import {Users} from '../../Model/users.model';
import {UserService} from '../../services/users.service';
import {Router} from '@angular/router';


@Component({
    moduleId:module.id,    
    templateUrl:'registrationAndLogin.component.html',
    styleUrls:['registrationAndLogin.component.scss'],    
})

export class RegistrationAndLoginComponent{

    users:Users[];
    errorMessage: string;
    userName:string;
    userEmail:string;
    userPassword:string;
    confirmPassword:string;
    userScore:number;
    isLoggedIn:boolean;

    loginUserName:string;
    loginUserPassword:string;
    
    user:string;
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
          isLoggedIn:false
              }      
      var data= this.userService.signup(newUser)
      .subscribe(result  => this._router.navigate(['/']),
      error=>this.errorMessage=error);
  }
     


    login(even:any){
        event.preventDefault();
        var userDetails:any={
            userName:this.loginUserName,
            userPassword:this.loginUserPassword
        }

        var userResult=this.userService.signin(userDetails)
            .subscribe(result=>this._router.navigate(['/']),
            error=>{this.errorMessage=error});
        // get details of the user based on username and password.         
    }
directToHomeComponent(){
    this._router.navigate(['/home']);
}
}

// userDetails=>{
//           this.users.push(userDetails);  
//           this.userName='';  
//           this.userEmail='';
//           this.userPassword='';
//           this.confirmPassword='';
//       }