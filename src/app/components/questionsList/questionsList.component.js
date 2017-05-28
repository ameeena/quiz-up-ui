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
var question_service_1 = require('../../services/question.service');
var QuestionsListComponent = (function () {
    function QuestionsListComponent(questionService) {
        var _this = this;
        this.questionService = questionService;
        questionService.getQuestions().subscribe(function (listOfQuestionsObtained) { _this.listOfQuestions = listOfQuestionsObtained; });
    }
    QuestionsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'questionsList.component.html',
            styleUrls: ['questionsListStyles.component.css'],
            providers: [question_service_1.QuestionService],
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionService])
    ], QuestionsListComponent);
    return QuestionsListComponent;
}());
exports.QuestionsListComponent = QuestionsListComponent;
//# sourceMappingURL=questionsList.component.js.map