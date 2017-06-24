import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../core/services/question.service';
import { Quiz, QuestionFromUser } from '../../core/Model/questions.model';
import { Users } from '../../core/Model/users.model'
import { UserService } from '../../core/services/users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';



@Component({
    moduleId: module.id,
    templateUrl: 'questionsList.component.html',
    styleUrls: ['questionsListStyles.component.scss'],
})

export class QuestionsListComponent implements OnInit {
    // listOfQuestions:Tests[];
    data: any;
    questionDetails: QuestionFromUser[] = [];

    testsTaken: [{
        testId: string,
        testName: string,
        domainName: string,
        answers: [{
            questionId: string,
            selectedIndex: number,
            correctIndex: number
        }],
        totalScore: number
    }];

    filteredDataContainingOnlyOneTestDetail: any
    listOfQuestionsTakenByUser: any;
    listOfQuestionsFromDb: any;
    totalScore: number = 0;
    constructor(private questionService: QuestionService,
        private userService: UserService,
        private router: Router,
        private route: ActivatedRoute, ) {
    }

    //filter based on the testId.
    getBasedOnTestId(testId, item) {
        return item.testId == testId;
    }
    ngOnInit() {
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
        const testId: string = this.route.snapshot.params['id'];
        this.userService.getUserTestsList().subscribe((res) => {
            this.testsTaken = res.testsTaken;
            // get the test with the testId. -- User TestId
            this.filteredDataContainingOnlyOneTestDetail = this.testsTaken.filter(this.getBasedOnTestId.bind(this, testId));
            this.listOfQuestionsTakenByUser = this.filteredDataContainingOnlyOneTestDetail[0].answers;
            this.totalScore = this.filteredDataContainingOnlyOneTestDetail[0].testScore;

            //Get test From DB
            this.questionService.getTestBasedOnId(testId).subscribe((results) => {
                if (results == null) {

                } else {
                    this.listOfQuestionsFromDb = results.questions;
                    for (var i = 0; i < this.listOfQuestionsTakenByUser.length; i++) {
                        if (this.listOfQuestionsTakenByUser[i].questionId == this.listOfQuestionsFromDb[i]._id) {
                            var newList = {
                                questionName: this.listOfQuestionsFromDb[i].questionName,
                                correctAnswer: this.listOfQuestionsFromDb[i].options[this.listOfQuestionsFromDb[i].correctOptionIndex],
                                selectedAnswer: this.listOfQuestionsFromDb[i].options[this.listOfQuestionsTakenByUser[i].selectedIndex],
                                isCorrectAnswer: this.listOfQuestionsFromDb[i].correctOptionIndex == this.listOfQuestionsTakenByUser[i].selectedIndex ? true : false
                            }
                            this.questionDetails.push(newList);
                        }
                    }
                }
            });
        });
    }
}