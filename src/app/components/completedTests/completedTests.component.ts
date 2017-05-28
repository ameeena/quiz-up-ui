import{Component,OnInit} from '@angular/core';
import{Router} from '@angular/router';
import {UserService} from '../../services/users.service';
import{Quiz} from '../../Model/questions.model';
import {Users} from '../../Model/users.model';
import{QuestionService} from '../../services/question.service';

@Component({
    moduleId:module.id,
    templateUrl:'completedTests.component.html',
    styleUrls:['completedTests.component.scss']
})

export class CompletedTestsComponent implements OnInit{
    userDetails =new Users();
    listOfTestsTaken:any;
    isTestsTaken:boolean=false;

    constructor(private userSerive:UserService,
                private router:Router,
                private questionService:QuestionService){
                
    }
    getQuestionsList(testId){
        this.router.navigate(['/home',{outlets:{'router1':['questionsList',testId]}}]);
    }
    ngOnInit(){
       if(!this.userSerive.isLoggedIn()){
            this.router.navigate(['/quizStart']);
       }
       this.userSerive.getUserTestsList().subscribe((results)=>{
           this.userDetails=results;
           if(this.userDetails!=null){
                this.listOfTestsTaken=this.userDetails.testsTaken;
                this.isTestsTaken=true;
           }
           else{
               this.isTestsTaken=false;
           }
           
       })
    }    
}