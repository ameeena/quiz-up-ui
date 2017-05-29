import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AttemptedQuestion } from "../Model/questions.model";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  attempt : AttemptedQuestion;

  @Input()
  set question(question : AttemptedQuestion) {
    this.attempt = question;
  }
  get question() {
    return this.attempt;
  }

  @Input() usage : string;

  @Output() questionAttempted = new EventEmitter<AttemptedQuestion>();

  constructor() { }

  ngOnInit() {
  }

}
