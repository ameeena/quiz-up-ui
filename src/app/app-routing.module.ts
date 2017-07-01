import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/pageNotFound/pageNotFound.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';

import { AvailableTestsComponent } from './quiz/availableTests/availableTests.component';
import { CompletedTestsComponent } from './quiz/completedTests/completedTests.component';
import { QuizInstructionsComponent } from './quiz/quiz-instructions/quiz-instructions.component';
import { ActualQuizComponent } from './quiz/actual-quiz/actual-quiz.component';
import { QuestionsListComponent } from './quiz/questionsList/questionsList.component';
import { TeamScoresComponent } from './quiz/teamBasedScores/teamScores.component';
import { TeamScoresGraphComponent } from './quiz/teamScoresAsGraph/teamScoresAsGraph.component';


import { AddTestComponent } from './admin/addTests/addTest.component';
import { UsersListComponent } from './admin/usersList/usersList.component';
import { TestsListComponent } from './admin/testsList/testsList.component';
import { UploadReadingMaterialComponent } from './admin/uploadReadingMaterialLinks/uploadReadingMaterialLinks.component';

import { AuthGuard } from './core/services/auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: DashboardComponent },
            { path: 'availableTests', component: AvailableTestsComponent },
            { path: 'completedTests', component: CompletedTestsComponent },
            { path: 'beginQuiz/:quizId', component: QuizInstructionsComponent },
            { path: 'actualQuiz/:quizId', component: ActualQuizComponent },
            { path: 'questionsList/:id', component: QuestionsListComponent },
            { path: 'teamBasedScores', component: TeamScoresComponent },
            { path: 'createTest', component: AddTestComponent },
            { path: 'usersList', component: UsersListComponent },
            { path: 'testsList', component: TestsListComponent },
            { path: 'uploadReadingMaterialLinks', component: UploadReadingMaterialComponent },
            {path:  'teamScoresGraph', component:TeamScoresGraphComponent}
        ]
    },
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents =
    [
        LoginComponent,
        HomeComponent,
        PageNotFoundComponent,
        DashboardComponent
    // tslint:disable-next-line:eofline
    ];