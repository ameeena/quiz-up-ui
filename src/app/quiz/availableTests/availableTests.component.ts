import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/users.service';
import { QuestionService } from '../../core/services/question.service';
import { Quiz } from '../../core/model/questions.model';
import { Users } from '../../core/model/users.model';

@Component({
    moduleId: module.id,
    templateUrl: 'availableTests.component.html',
    styleUrls: ['availableTests.component.scss']
})
export class AvailableTestsComponent implements OnInit {
    listOfAllTests: Quiz[];
    testsTakenList = new Users();
    listOfQuestions: any;
    listOfAvailableTests: Quiz[];
    listOfAvailableTestsResult: Quiz[] = [];
    // tslint:disable-next-line:no-inferrable-types
    isNotPres: boolean = true;
    // tslint:disable-next-line:no-inferrable-types
    isAvailbleTests: boolean = false;
    // get list of all tests.
    // get user Details
    // check if the user has any tests taken
    // if yes then dont show that
    // check if the user array has any tests!
    constructor(private userService: UserService,
        private questionService: QuestionService,
        private router: Router) {

            }
    ngOnInit() {
        this.listOfAvailableTests = [];
        this.listOfAllTests = [];
        this.questionService.getTests().subscribe((results) => {
            this.listOfAvailableTests = results;
            if (this.listOfAvailableTests != null) {
                this.listOfAvailableTestsResult = this.listOfAvailableTests;
                this.isAvailbleTests = true;
            }
            // tslint:disable-next-line:one-line
            else {
                this.isAvailbleTests = false;
            }
        });
        // userService.getUserTestsList().subscribe((results)=>{
        //     if(results!=null){
        //         this.testsTakenList.testsTaken=results.testsTaken;
        //     for(var i=0;i<this.listOfAllTests.length;i++){
        //         for(var j=0;j<this.testsTakenList.testsTaken.length;j++){
        //             if(this.listOfAllTests[i]._id===this.testsTakenList.testsTaken[j].testId){
        //                 this.isNotPres=false;
        //                 break;
        //             }
        //         }
        //         if(this.isNotPres==true){
        //             this.listOfAvailableTests.push(this.listOfAllTests[i]);
        //         }
        //         this.isNotPres=true;
        //     }
        //     }

        // });
    }

// tslint:disable-next-line:eofline
}