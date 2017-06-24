import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    templateUrl: 'instructionsPage.component.html',
    styleUrls: ['instructionsPageStyles.component.scss']
})

export class InstructionsPageComponent implements OnInit {

    constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) {

    }
    startTest() {
        // this.router.navigate(['/quiz']);
        // "['/home',{outlets: {'router1':['welcome'] }}]"
        let id = this.route.snapshot.params['id'];
        this.router.navigate(['/home', { outlets: { 'router1': ['quiz', id] } }]);
    }

    ngOnInit() {
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/quizStart']);
        }

    }

}