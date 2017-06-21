import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AttemptedQuestion } from "./../model/questions.model";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  attempt = new AttemptedQuestion();
  exit = false;

  @Input()
  set question(question: AttemptedQuestion) {
    if (question && question.question && question.question.options) {
      this.exit = false;
      this.attempt = question
      this.attempt.answerIndex = undefined;
    }
  }
  get question() {
    return this.attempt;
  }

  @Input() usage: string;

  @Output() questionAttempted = new EventEmitter<AttemptedQuestion>();

  constructor() { }

  ngOnInit() {
  }

  isSelected(currentIndex: number) {
    return this.attempt.answerIndex === currentIndex;
  }

  selectOption(selectedIndex: number) {
    this.attempt.answerIndex = this.attempt.answerIndex === selectedIndex ? undefined : selectedIndex;
  }

  optionSelected() {
    return this.attempt.answerIndex !== undefined;
  }

  beginSubmission() {
    this.exit = true;
  }

  submit(event: Event) {
    if (event.srcElement.className.includes('quiz-question')) {
      this.questionAttempted.emit(this.attempt);
    }
  }

}
