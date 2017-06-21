import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { PaginationModule } from 'ng2-bootstrap/Pagination';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SharedModule } from "./shared/shared.module";
import { SimpleTimer } from 'ng2-simple-timer';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AddTestComponent } from './components/tests/addTest.component';
import { WelcomePageComponent } from './components/quizUp/welcomePage.component';
import { RegistrationAndLoginComponent } from './components/registration/registrationAndLogin.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestionsListComponent } from './components/questionsList/questionsList.component';
import { PageNotFoundComponent } from './components/pageNotFound/pageNotFound.component';
import { InstructionsPageComponent } from './components/quiz/instructionsPage.component';
import { UsersListComponent } from './components/usersList/usersList.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AvailableTestsComponent } from './components/availableTests/availableTests.component';
import { CompletedTestsComponent } from './components/completedTests/completedTests.component';
import { TestsListComponent } from './components/testsList/testsList.component';
import { UploadReadingMaterialComponent } from './components/uploadReadingMaterialLinks/uploadReadingMaterialLinks.component';
import { TeamScoresComponent } from './components/teamBasedScores/teamScores.component';

import { EqualValidator } from './directives/equalValidator.directive';
import { QuestionComponent } from './question/question.component';
import { LoginComponent } from './login/login.component';
import { ActualQuizComponent } from './actual-quiz/actual-quiz.component';
import { QuizInstructionsComponent } from './quiz-instructions/quiz-instructions.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ChartsModule,
    Ng2TableModule,
    PaginationModule.forRoot(),
    Angular2FontAwesomeModule,
    SharedModule
  ],
  declarations:
  [
    AppComponent,
    WelcomePageComponent,
    AddTestComponent,
    InstructionsPageComponent,
    RegistrationAndLoginComponent,
    EqualValidator,
    QuizComponent,
    QuestionsListComponent,
    UsersListComponent,
    HomeComponent,
    WelcomeComponent,
    AvailableTestsComponent,
    CompletedTestsComponent,
    TestsListComponent,
    UploadReadingMaterialComponent,
    TeamScoresComponent,
    PageNotFoundComponent,
    QuestionComponent, LoginComponent, ActualQuizComponent, QuizInstructionsComponent
  ],
  bootstrap: [AppComponent],
  providers: [SimpleTimer]

})

export class AppModule { }
