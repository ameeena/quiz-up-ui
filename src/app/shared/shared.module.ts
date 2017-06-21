import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    QuizQuestionComponent,
    TimerComponent
  ],
  exports: [
    CommonModule,
    QuizQuestionComponent,
    TimerComponent
  ]
})
export class SharedModule { }
