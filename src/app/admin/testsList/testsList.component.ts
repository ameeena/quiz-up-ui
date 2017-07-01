import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../core/services/question.service';
import { Quiz } from '../../core/model/questions.model';
import { UserService } from '../../core/services/users.service';

@Component({
    moduleId: module.id,
    templateUrl: 'testsList.component.html',
    styleUrls: ['testsList.component.scss']

})

export class TestsListComponent implements OnInit {
    testsList: Quiz[]
    isError: boolean = false;
    errorMessage: string = "";
    successMessage: string = "";
    isSuccess: boolean = false;
    constructor(private router: Router,
        private userService: UserService,
        private testsService: QuestionService) {

        testsService.getTests().subscribe((results) => {
            this.testsList = results;
        })
    }

    deleteTest(testId: string) {
        this.testsService.deleteTestBasedOnId(testId).subscribe((result) => {
            console.log(result);
            this.testsService.getTests().subscribe((results) => {
                this.testsList = results;
                this.successMessage = "Test deleted successfully!!";
                this.isSuccess = true;
            }, (error) => {
                this.isError = true;
                this.errorMessage = error;
            })
        })
    }

    ngOnInit() {
        
    }

}