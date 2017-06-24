import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../core/services/teams.service';
import { UserService } from '../../core/services/users.service';
import { TeamModel } from '../../core/Model/teams.model';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'teamScores.component.html',
    styleUrls: ['teamScores.component.scss']
})
export class TeamScoresComponent implements OnInit {
    listOfTeamsAndTeamScores: [TeamModel];
    listOfTeamsAndTeamScores1: any;
    constructor(private teamService: TeamService,
        private userService: UserService,
        private router: Router) {

    }
    ngOnInit() {
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
        this.teamService.getTeamScores().subscribe((res) => {
            this.listOfTeamsAndTeamScores = res;
        });
    }
}