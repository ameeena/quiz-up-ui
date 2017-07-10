import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { DomainModel } from '../../core/model/domains.model';
import { Quiz, QuizQuestion, AttemptedQuestion } from '../../core/model/questions.model';
import { QuestionService } from '../../core/services/question.service';
import { UserService } from '../../core/services/users.service';
import { TeamService } from '../../core/services/teams.service';
import { DomainService } from '../../core/services/domains.service';

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

  attemptedAnswers: AttemptedQuestion[] = [];

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    private domainService: DomainService
  ) { }

  ngOnInit() {
    // this.testId = this.route.snapshot.params['id']
    this.questionService.getTestBasedOnId(this.testId).subscribe((testData) => {
      this.quizData = testData;
      this.initializeQuestion(0);
      this.quizDuration = 300;
      console.log(this.quizDuration);
      // this.quizDuration = this.quizData.duration;
    });
  }

  submitAnswer(attemptedAnswer: AttemptedQuestion) {
    this.attemptedAnswers.push(attemptedAnswer);
    if (this.quizData.questions.length > this.currentQuestionIndex) {
      this.initializeQuestion(this.currentQuestionIndex + 1);
    }
  }

  initializeQuestion(questionIndex: number) {
    this.currentQuestionIndex = questionIndex;
    this.currentQuestion = new AttemptedQuestion();
    this.currentQuestion.question = this.quizData.questions[questionIndex];
  }

}
