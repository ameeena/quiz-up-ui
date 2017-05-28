import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AttemptedQuestion } from "../Model/questions.model";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  _question : AttemptedQuestion;

  @Input()
  set question(question : AttemptedQuestion) {
    this._question = question;
  }
  get question() {
    return this._question;
  }

  @Input() usage : string;

  @Output() questionAttempted = new EventEmitter<AttemptedQuestion>();

  constructor() { }

  ngOnInit() {
  }

}
