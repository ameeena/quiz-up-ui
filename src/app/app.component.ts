import { Component } from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {QuestionService} from './services/question.service';
import {UserService} from './services/users.service';
import{ReadingMaterialService} from './services/readingMaterial.service';
import{TeamService} from './services/teams.service';
import{DomainService} from './services/domains.service';

@Component({
  moduleId:module.id,
  selector: 'my-app',  
  templateUrl:'app.component.html', 
  styleUrls:['app.component.scss'],
  providers:[QuestionService,UserService,ReadingMaterialService,TeamService,DomainService]
  // template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { 
    pageTitle="QuizUp";
    isLoggedIn:boolean=false; 
    user:any;

    constructor(private userService:UserService){      
      
    }
  }
