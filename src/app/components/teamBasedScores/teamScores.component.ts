import {Component,OnInit} from'@angular/core';
import{TeamService} from '../../services/teams.service';
import{UserService} from '../../services/users.service';
import{TeamModel} from '../../Model/teams.model';
import{Router} from '@angular/router';

@Component({
    moduleId:module.id,
    templateUrl:'teamScores.component.html',
    styleUrls:['teamScores.component.scss']
})
export class TeamScoresComponent implements OnInit{
    listOfTeamsAndTeamScores:[TeamModel];
    listOfTeamsAndTeamScores1:any;
    constructor(private teamService:TeamService,
                private userService:UserService,
                private router:Router){

    }
     ngOnInit(){
       if(!this.userService.isLoggedIn()){
            this.router.navigate(['/quizStart']);
       }
       this.teamService.getTeamScores().subscribe((res)=>{
           this.listOfTeamsAndTeamScores=res;
       });
   }
}