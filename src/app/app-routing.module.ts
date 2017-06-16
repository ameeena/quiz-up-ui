import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/pageNotFound/pageNotFound.component';
import { AddTestComponent } from './components/tests/addTest.component';
import { QuestionsListComponent } from './components/questionsList/questionsList.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { InstructionsPageComponent } from './components/quiz/instructionsPage.component';
import { WelcomePageComponent } from './components/quizUp/welcomePage.component';
import { RegistrationAndLoginComponent } from './components/registration/registrationAndLogin.component';
import { UsersListComponent } from './components/usersList/usersList.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AvailableTestsComponent } from './components/availableTests/availableTests.component';
import { CompletedTestsComponent } from './components/completedTests/completedTests.component';
import { TestsListComponent } from './components/testsList/testsList.component';
import { UploadReadingMaterialComponent } from './components/uploadReadingMaterialLinks/uploadReadingMaterialLinks.component';
import { TeamScoresComponent } from './components/teamBasedScores/teamScores.component';
import { LoginComponent } from './login/login.component';
import { ActualQuizComponent } from './actual-quiz/actual-quiz.component';
import { QuizInstructionsComponent } from "./quiz-instructions/quiz-instructions.component";

const appRoutes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: '', component: WelcomePageComponent },
            { path: 'beginQuiz/:quizId', component: QuizInstructionsComponent },
            { path: 'actualQuiz/:quizId', component: ActualQuizComponent },
            { path: 'questionsList', component: QuestionsListComponent },
            { path: 'usersList', component: UsersListComponent },
            { path: 'quiz/:id', component: QuizComponent },
            { path: 'instructionsPage/:id', component: InstructionsPageComponent },
            { path: 'tests', component: AddTestComponent },
            { path: 'registrationAndLogin', component: RegistrationAndLoginComponent },
            { path: 'availableTests', component: AvailableTestsComponent },
            { path: 'completedTests', component: CompletedTestsComponent },
            { path: 'questionsList/:id', component: QuestionsListComponent },
            { path: 'testsList', component: TestsListComponent },
            { path: 'uploadReadingMaterialLinks', component: UploadReadingMaterialComponent },
            { path: 'teamBasedScores', component: TeamScoresComponent }
        ]
    },
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }