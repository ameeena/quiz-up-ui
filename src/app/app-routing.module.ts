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

const appRoutes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'actualQuiz/:quizId', component: ActualQuizComponent },
    // {path:'questionsList',component:QuestionsListComponent},
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'dashboard', component: WelcomePageComponent, outlet: 'router1', pathMatch: 'full' },
            { path: 'questionsList', component: QuestionsListComponent, outlet: 'router1' },
            { path: 'usersList', component: UsersListComponent, outlet: 'router1' },
            { path: 'quiz/:id', component: QuizComponent, outlet: 'router1' },
            { path: 'instructionsPage/:id', component: InstructionsPageComponent, outlet: 'router1' },
            { path: 'tests', component: AddTestComponent, outlet: 'router1' },
            { path: 'registrationAndLogin', component: RegistrationAndLoginComponent, outlet: 'router1' },
            { path: 'availableTests', component: AvailableTestsComponent, outlet: 'router1' },
            { path: 'completedTests', component: CompletedTestsComponent, outlet: 'router1' },
            { path: 'questionsList/:id', component: QuestionsListComponent, outlet: 'router1' },
            { path: 'testsList', component: TestsListComponent, outlet: 'router1' },
            { path: 'uploadReadingMaterialLinks', component: UploadReadingMaterialComponent, outlet: 'router1' },
            { path: 'teamBasedScores', component: TeamScoresComponent, outlet: 'router1' }
        ]
    },
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}