import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AttemptedQuestion } from "../Model/questions.model";

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
    if (question) {
      this.exit = false;
      this.attempt = question
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
    this.attempt.answerIndex = selectedIndex;
  }

  beginSubmission() {
    this.exit = true;
  }

  submit(event : Event) {
    if (!event.srcElement.className.includes('option')) {
      this.questionAttempted.emit(this.attempt);
    }
  }

}
