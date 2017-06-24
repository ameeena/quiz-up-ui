import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module';
import { ActualQuizComponent } from "./actual-quiz/actual-quiz.component";
import { AvailableTestsComponent } from "./availableTests/availableTests.component";
import { CompletedTestsComponent } from "./completedTests/completedTests.component";
import { QuestionsListComponent } from "./questionsList/questionsList.component";
import { QuizInstructionsComponent } from "./quiz-instructions/quiz-instructions.component";
import { TeamScoresComponent } from "./teamBasedScores/teamScores.component";

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
    TeamScoresComponent
  ],
  exports: [
    ActualQuizComponent,
    AvailableTestsComponent,
    CompletedTestsComponent,
    QuestionsListComponent,
    QuizInstructionsComponent,
    TeamScoresComponent
  ]
})
export class QuizModule { }
