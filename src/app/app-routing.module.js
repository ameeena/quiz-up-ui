"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var pageNotFound_component_1 = require('./components/pageNotFound/pageNotFound.component');
var addQuestions_component_1 = require('./components/questions/addQuestions.component');
var questionsList_component_1 = require('./components/questionsList/questionsList.component');
var quiz_component_1 = require('./components/quiz/quiz.component');
var welcomePage_component_1 = require('./components/quizUp/welcomePage.component');
var registrationAndLogin_component_1 = require('./components/registration/registrationAndLogin.component');
var appRoutes = [
    { path: 'quizUp', component: welcomePage_component_1.WelcomePageComponent },
    { path: 'questions', component: addQuestions_component_1.AddQuestionsComponent },
    { path: 'registrationAndLogin', component: registrationAndLogin_component_1.RegistrationAndLoginComponent },
    { path: 'questionsList', component: questionsList_component_1.QuestionsListComponent },
    { path: 'quiz', component: quiz_component_1.QuizComponent },
    { path: '', component: registrationAndLogin_component_1.RegistrationAndLoginComponent, pathMatch: 'full' },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes, { useHash: true })
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map