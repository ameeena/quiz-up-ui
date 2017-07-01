import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/users.service';
import { Quiz } from '../../core/model/questions.model';
import { Users } from '../../core/model/users.model';
import { QuestionService } from '../../core/services/question.service';

@Component({
    moduleId: module.id,
    templateUrl: 'completedTests.component.html',
    styleUrls: ['completedTests.component.scss']
})

export class CompletedTestsComponent implements OnInit {
    userDetails = new Users();
    listOfTestsTaken: any;
    // tslint:disable-next-line:no-inferrable-types
    isTestsTaken: boolean = false;

    constructor(private userSerive: UserService,
        private router: Router,
        private questionService: QuestionService) {

    }
    getQuestionsList(testId) {
        this.router.navigate(['/home/questionsList', testId]);
    }
    ngOnInit() {
        this.userSerive.getUserTestsList().subscribe((results) => {
            this.userDetails = results;
            if (this.userDetails != null) {
                this.listOfTestsTaken = this.userDetails.testsTaken;
                this.isTestsTaken = true;
            }
            // tslint:disable-next-line:one-line
            else {
                this.isTestsTaken = false;
            }
        });
    }
}
