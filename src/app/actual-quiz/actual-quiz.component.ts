import { Component, OnInit } from '@angular/core';
import { Quiz, QuizQuestion, AttemptedQuestion } from '../Model/questions.model';
import { QuestionService } from '../services/question.service';
import { UserService } from '../services/users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { SimpleTimer } from 'ng2-simple-timer';
import { TeamService } from '../services/teams.service';
import { DomainService } from '../services/domains.service';
import { DomainModel } from '../Model/domains.model';

@Component({
  templateUrl: './actual-quiz.component.html',
  styleUrls: ['./actual-quiz.component.scss']
})
export class ActualQuizComponent implements OnInit {

  testId: string = "592c964c3fb56a2174a56341";
  quizData: Quiz;
  quizDuration: number;
  currentQuestionIndex: number = 0;
  currentQuestion: AttemptedQuestion;

  attemptedAnswers : AttemptedQuestion[] = [];

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    private domainService: DomainService
  ) { }

  ngOnInit() {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['']);
    }
    // this.testId = this.route.snapshot.params['id'];

    this.questionService.getTestBasedOnId(this.testId).subscribe((testData) => {
      this.quizData = testData;
      this.initializeQuestion(0);
      this.quizDuration = this.quizData.duration;
    });
  }

  submitAnswer(attemptedAnswer : AttemptedQuestion) {
    this.attemptedAnswers.push(attemptedAnswer);
    if(this.quizData.questions.length > this.currentQuestionIndex) {
      this.initializeQuestion(this.currentQuestionIndex + 1);
    }
  }

  initializeQuestion(questionIndex: number) {
    this.currentQuestionIndex = questionIndex;
    this.currentQuestion = new AttemptedQuestion();
    this.currentQuestion.question = this.quizData.questions[questionIndex];
  }

}
