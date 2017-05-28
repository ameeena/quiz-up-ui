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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var admin_module_1 = require('./components/admin/admin.module');
var addQuestions_component_1 = require('./components/questions/addQuestions.component');
var welcomePage_component_1 = require('./components/quizUp/welcomePage.component');
var registrationAndLogin_component_1 = require('./components/registration/registrationAndLogin.component');
var quiz_component_1 = require('./components/quiz/quiz.component');
var questionsList_component_1 = require('./components/questionsList/questionsList.component');
var pageNotFound_component_1 = require('./components/pageNotFound/pageNotFound.component');
var equalValidator_directive_1 = require('./directives/equalValidator.directive');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, admin_module_1.AdminModule, app_routing_module_1.AppRoutingModule, ng_bootstrap_1.NgbModule],
            declarations: [app_component_1.AppComponent, welcomePage_component_1.WelcomePageComponent, addQuestions_component_1.AddQuestionsComponent, registrationAndLogin_component_1.RegistrationAndLoginComponent, equalValidator_directive_1.EqualValidator, quiz_component_1.QuizComponent, questionsList_component_1.QuestionsListComponent, pageNotFound_component_1.PageNotFoundComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map