import {Component,OnInit} from '@angular/core';
import {UserService} from '../../services/users.service';
import{Users} from '../../Model/users.model';
import {Router} from '@angular/router';
 
@Component({
    moduleId:module.id,
    templateUrl:'usersList.component.html',
    styleUrls:['usersList.component.scss'],
})
export class UsersListComponent implements OnInit{

    // userList:Users[];    
    userDetailsList:Users[];
    isSelected:boolean=true;

    isError:boolean=false;
    isSuccess:boolean=false;

    successMessage:string="";
    errorMessage:string="";

    constructor(private userService:UserService,private router:Router){
       
    }

    deleteUser(userName:string){
        this.userService.deleteUserBasedOnUserName(userName).subscribe((result)=>{
                this.userService.getAllUsersList().subscribe(userListObtained=>{
                this.userDetailsList=userListObtained;
                this.isSuccess=true;
                this.successMessage=result;   
            });
        },(error)=>{
            this.isError=true;
            this.errorMessage=error;
        })
    }
    ngOnInit(){
         if(!this.userService.isLoggedIn()){
            this.router.navigate(['/quizStart']);
       }

        this.userService.getAllUsersList().subscribe(userListObtained=>{
            this.userDetailsList=userListObtained;           
        });
    }    
}