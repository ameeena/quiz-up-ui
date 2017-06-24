import { Component, trigger, state, style, transition, animate, group, OnInit, keyframes } from '@angular/core';
import { Quiz } from '../../core/model/questions.model';
import { QuestionService } from '../../core/services/question.service';
import { UserService } from '../../core/services/users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { SimpleTimer } from 'ng2-simple-timer';
import { TeamService } from '../../core/services/teams.service';
import { DomainService } from '../../core/services/domains.service';
import { DomainModel } from '../../core/Model/domains.model';

@Component({
    moduleId: module.id,
    templateUrl: 'quiz.component.html',
    styleUrls: ['quizStyles.component.scss'],
})

export class QuizComponent implements OnInit {

    testData: Quiz;
    idValue: any;
    index: number = 0;

    questionName: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    correctOptionIndex: number;
    pointsObtained: number = 0;
    testName: string;
    domainName: string;
    testTakenList: any;
    answers: string[] = [];
    questionId: string;

    disableButtonToContinue: boolean = true;

    timerCounter = 0;
    timerId: string;
    timerButton = 'Subscribe';


    timerSecCounter: number = 59;
    secTimerId: string;

    timerMinCounter: number;
    minTimerId: string;

    textData: string;
    secsDone: boolean = false;

    userTeamName: string;
    domainData: DomainModel = new DomainModel();

    performanceText: string = "";

    questionsList: any[] = [];

    constructor(private questionService: QuestionService,
        private router: Router,
        private userService: UserService,
        private route: ActivatedRoute,
        private simpleTimer: SimpleTimer,
        private teamService: TeamService,
        private domainService: DomainService) {

        let id = this.route.snapshot.params['id'];
        this.idValue = id;
        this.questionService.getTestBasedOnId(this.idValue).subscribe((res) => {
            this.testData = res;
            this.testName = this.testData.name;
            this.domainName = this.testData.domain;
            this.simpleTimer.newTimer("secTimer", 1);
            this.simpleTimer.newTimer("minTimer", 59);
            this.timerMinCounter = this.testData.questions.length - 1;
            this.subscribeToSecTimer();
            this.subscribeToMinTimer();

            this.userService.getUsersTeamName().subscribe((res) => {
                this.userTeamName = res.teamName;
            })

            this.showQuestionsOneByOne();
        });
    }
    showQuestionsOneByOne() {
        if (this.index < this.testData.questions.length) {
            this.testData.questions.forEach((item, index) => {
                if (index == this.index) {
                    this.questionName = item.value;
                    this.questionId = item._id;
                    this.option1 = item.options[0];
                    this.option2 = item.options[1];
                    this.option3 = item.options[2];
                    this.option4 = item.options[3];
                    this.correctOptionIndex = item.correctOptionIndex;
                }
            });
        }
        else {
            this.updateDetailsAfterTestDone();
        }
    }
    onClickOfSubmitButton(enteredIndexValue) {
        if (this.correctOptionIndex == enteredIndexValue) {
            this.pointsObtained++;
            var blah: any = {
                questionName: this.questionName,
                isCorrect: true
            }
        }
        else {
            var blah: any = {
                questionName: this.questionName,
                isCorrect: false
            }
        }
        this.questionsList.push(blah);

        this.index++;
        var answerAdded: any = {
            questionId: this.questionId,
            selectedIndex: enteredIndexValue,
            correctIndex: this.correctOptionIndex
        }
        this.answers.push(answerAdded);
        this.showQuestionsOneByOne();
    }
    //After test is done: DO this.
    updateDetailsAfterTestDone() {
        //  save score
        //  //Update team score
        //  this.teamService.updateTeamScore(this.userTeamName,this.pointsObtained).subscribe(res=>{
        //  });

        //  //Update domain based scores.
        //  this.domainService.updateDomainBasedScores(this.domainName,this.pointsObtained,this.testName).subscribe((res)=>{

        //  });

        //  //update user's individual score.
        // this.userService.updateUserScore(this.pointsObtained,this.testData._id,this.answers,this.testName,this.domainName).subscribe(s=>{
        // });

        this.updatePerformanceText();
        console.log(this.questionsList);
        this.delMinTimer();
        this.deleteSecTimer();
        //Show score.          
        this.disableButtonToContinue = false;
    }
    logout() {
        this.router.navigate(['/quizStart']);
    }

    subscribeToSecTimer() {
        if (this.secTimerId) {
            // Unsubscribe if timer Id is defined
            this.simpleTimer.unsubscribe(this.secTimerId);
            this.secTimerId = undefined;
            this.timerButton = 'Subscribe';
        } else {
            // Subscribe if timer Id is undefined
            this.secTimerId = this.simpleTimer.subscribe('secTimer', e => this.secTimerCallback());
            this.timerButton = 'Unsubscribe';
        }
        console.log(this.simpleTimer.getSubscription());
    }
    secTimerCallback() {
        if (this.timerSecCounter != 0) {
            this.timerSecCounter--;
        }
        else {
            if (this.timerMinCounter == 0) {
                this.deleteSecTimer();
                //Update score 
                //Take them to some other screen!!
                console.log("Now really time is up.");
            }
            else {
                this.timerSecCounter = 59;
                this.secsDone = true;
            }

        }
    }

    deleteSecTimer() {
        this.simpleTimer.delTimer('secTimer');
    }

    subscribeToMinTimer() {
        if (this.minTimerId) {
            // Unsubscribe if timer Id is defined
            this.simpleTimer.unsubscribe(this.minTimerId);
            this.minTimerId = undefined;
            this.timerButton = 'Subscribe';
        } else {
            // Subscribe if timer Id is undefined
            this.minTimerId = this.simpleTimer.subscribe('minTimer', e => this.minTimerCallback());
            this.timerButton = 'Unsubscribe';
        }
    }


    minTimerCallback() {
        if (this.timerMinCounter != 0 && this.secsDone) {
            this.timerMinCounter--;
        }
        else {
            this.delMinTimer();
        }
    }
    //
    delMinTimer() {
        this.simpleTimer.delTimer('minTimer');
    }
    //
    getQuestionsList() {
        this.router.navigate(['/home', { outlets: { 'router1': ['questionsList', this.idValue] } }]);
    }
    //
    updatePerformanceText() {
        if (this.pointsObtained != 0) {
            let oneThirdOfTheScore = Math.floor(this.testData.questions.length / 3);
            let twoThirdOfTheScore = Math.floor(this.testData.questions.length * (2 / 3));

            if (this.pointsObtained <= oneThirdOfTheScore) {
                this.performanceText = "You can do better in the next tests."
            }
            else if (this.pointsObtained > oneThirdOfTheScore && this.pointsObtained <= twoThirdOfTheScore) {
                this.performanceText = "Mediocre performance";
            }
            else if (this.pointsObtained > twoThirdOfTheScore && this.pointsObtained < this.testData.questions.length) {
                this.performanceText = "Hurray!! But you didnt score full!!"
            }
            else if (this.pointsObtained == this.testData.questions.length) {
                this.performanceText = "Full marks!! Is there anyone smarter than you:)"
            }
        }
        else {
            this.performanceText = "You Suck!!!";
        }
    }
    ngOnInit() {
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['/quizStart']);
        }
    }

}