import { Component, OnInit } from '@angular/core';
import { Users } from '../Model/users.model';
import { UserService } from '../services/users.service';
import { Router } from '@angular/router';
declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: Users[];
  errorMessage: string;

  isLoggedIn: boolean;

  loginUserName: string;
  loginUserPassword: string;

  credentials: any = {};

  user: string;
  isValid: boolean = false;
  isError: boolean = false;
  // userLoginName:string;
  // userLoginPassword:string;
  userName: string;
  userEmail: string;
  userPassword: string;
  confirmPassword: string;
  userScore: number;

  teamName: string;

  signupModal : boolean = false;
  loginModal : boolean = false;


  listOfTeams: string[] = ["Ninjas", "Immortals", "Samurais", "Shoguns", "Vikings", "Gladiators", "Centurions", "Aztecs"];

  constructor(private userService: UserService, private _router: Router) {

  }

  ngOnInit() {
  }

  login(event: any) {
    event.preventDefault();
    this.userService.signin(this.credentials)
      .subscribe((result) => {
        // this.isValid=true;
        jQuery("#login").modal("hide");

        this._router.navigate(['home']);

      },
      (error) => {
        this.errorMessage = error;
        this.isError = true;
      });

    // get details of the user based on username and password.         
  }
  registerUser(even: any) {
    event.preventDefault();

    var newUser: any = {
      userName: this.userName,
      userEmail: this.userEmail,
      userPassword: this.userPassword,
      userScore: 0,
      isLoggedIn: false,
      teamName: this.teamName

    }
    var data = this.userService.signup(newUser)
      .subscribe((result) => {
        jQuery("#signup").modal("hide");
        this._router.navigate(['/home', { outlets: { 'router1': ['quizUp'] } }])
      },
      error => this.errorMessage = error);
  }

}