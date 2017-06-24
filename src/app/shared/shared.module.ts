import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    QuizQuestionComponent,
    TimerComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule,
    QuizQuestionComponent,
    TimerComponent
  ]
})
export class SharedModule { }
