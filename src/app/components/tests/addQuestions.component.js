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
var AddQuestionsComponent = (function () {
    function AddQuestionsComponent(questionService) {
        var _this = this;
        this.questionService = questionService;
        this.questionService.getQuestions()
            .subscribe(function (questionDetails) {
            _this.questions = questionDetails;
        });
    }
    AddQuestionsComponent.prototype.addQuestion = function (event) {
        var _this = this;
        event.preventDefault();
        var newQuestion = {
            question: this.question,
            option1: this.option1,
            option2: this.option2,
            option3: this.option3,
            option4: this.option4,
            correctAnswer: this.correctAnswer
        };
        var data = this.questionService.addQuestions(newQuestion)
            .subscribe(function (questionDetails) {
            _this.questions.push(questionDetails);
            _this.question = '';
            _this.option1 = '';
            _this.option2 = '';
            _this.option3 = '';
            _this.option4 = '';
            _this.correctAnswer = '';
        });
    };
    AddQuestionsComponent.prototype.ngOnInit = function () {
        console.log("In OnInit");
    };
    AddQuestionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'addQuestions.component.html',
            styleUrls: ['addQuestions.component.css']
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionService])
    ], AddQuestionsComponent);
    return AddQuestionsComponent;
}());
exports.AddQuestionsComponent = AddQuestionsComponent;
//# sourceMappingURL=addQuestions.component.js.map