import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module';
import { ActualQuizComponent } from './actual-quiz/actual-quiz.component';
import { AvailableTestsComponent } from './availableTests/availableTests.component';
import { CompletedTestsComponent } from './completedTests/completedTests.component';
import { QuestionsListComponent } from './questionsList/questionsList.component';
import { QuizInstructionsComponent } from './quiz-instructions/quiz-instructions.component';
import { TeamScoresComponent } from './teamBasedScores/teamScores.component';
import {TeamScoresGraphComponent} from './teamScoresAsGraph/teamScoresAsGraph.component';
import { NvD3Component } from 'ng2-nvd3';
import 'd3';
import 'nvd3';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    ActualQuizComponent,
    AvailableTestsComponent,
    CompletedTestsComponent,
    QuestionsListComponent,
    QuizInstructionsComponent,
    TeamScoresComponent,
    NvD3Component,
    TeamScoresGraphComponent,
  ],
  exports: [
    ActualQuizComponent,
    AvailableTestsComponent,
    CompletedTestsComponent,
    QuestionsListComponent,
    QuizInstructionsComponent,
    TeamScoresComponent,
    NvD3Component,
    TeamScoresGraphComponent
  ]
})
export class QuizModule { }
