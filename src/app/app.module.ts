import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule } from 'ng2-bootstrap/Pagination';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SimpleTimer } from 'ng2-simple-timer';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

import { QuizModule } from './quiz/quiz.module';
import { AdminModule } from './admin/admin.module';


import { QuestionService } from './core/services/question.service';
import { UserService } from './core/services/users.service';
import { ReadingMaterialService } from './core/services/readingMaterial.service';
import { TeamService } from './core/services/teams.service';
import { DomainService } from './core/services/domains.service';

import { EqualValidator } from './shared/equal-validator/equalValidator.directive';
import { AuthGuard } from './core/services/auth-guard.service';

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
    QuizModule,
    AdminModule
  ],
  declarations: [
    AppComponent,
    routedComponents,
    EqualValidator,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    SimpleTimer,
    QuestionService,
    UserService,
    ReadingMaterialService,
    TeamService,
    DomainService,
    AuthGuard
  ]

})

export class AppModule { }
