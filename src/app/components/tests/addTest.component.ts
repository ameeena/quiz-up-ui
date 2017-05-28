
import{Component,OnInit} from '@angular/core';
import{QuestionService} from '../../services/question.service';
import{Quiz} from '../../Model/questions.model';
import{UserService} from '../../services/users.service';
import {Router} from '@angular/router';


@Component({
    moduleId:module.id,
    templateUrl:'addTest.component.html',
    styleUrls:['addTest.component.scss']
})

export class AddTestComponent implements OnInit{

  tests= new Quiz();
  testName:string;
  domain:string;
  description:string;
  question:string;
  option1:string;
  option2:string;
  option3:string;
  option4:string;
  correctAnswerIndex:number;
  isNotLengthOfQuestions:boolean=true;
  listOfDomains:string[]=["Web", "Desktop", "PLC", "Embedded", "InfoMissiles" , "Random"];
//   noOfQuestions:number=5;

 


  maxQuesLengthReachedMsg:string="";
  errorMessage:string="";
  isError:boolean=false;

  isSuccess:boolean=false;
  successMessage:string="";

  minNoOfQuestions:number=2;
  maxNoOfQuestions:number=3;

  disableAddQuestButton:boolean=false;
  disableAddTestButton:boolean=true;
  
  maxLengthReached:boolean=false;
  constructor(  private questionService:QuestionService,
                private userService:UserService,
                private router:Router){      
                  this.tests.questions=[];
  }

  addQuestion(event:any){
      event.preventDefault();
      var newQuestion:any={
          questionName:this.question,
          options:[this.option1,this.option2,this.option3,this.option4],
          correctOptionIndex:this.correctAnswerIndex
      }         
      this.tests.questions.push(newQuestion);
      
      this.question="";
      this.option1="";
      this.option2="";
      this.option3="";
      this.option4="";
      this.correctAnswerIndex=0;
      if(this.tests.questions.length == this.minNoOfQuestions){
          this.disableAddTestButton=false;
      }
      if(this.tests.questions.length==this.maxNoOfQuestions){
          this.disableAddQuestButton=true;
          this.maxLengthReached=true;
          this.maxQuesLengthReachedMsg="Questions limit per test reached.Max no of questions per test are :" + this.maxNoOfQuestions;
      }
    //   if(this.tests.questions.length==this.noOfQuestions){
    //       this.isNotLengthOfQuestions=false;
    //       this.maxQuesLengthReachedMsg = "Questions limit per test reached.Max no of questions per test are :" + this.noOfQuestions;
    //   }
  }
  addTest(event:any){    
       event.preventDefault();       
       this.tests.name=this.testName;
       this.tests.domain=this.domain;
       this.tests.description=this.description;
       
       this.questionService.addTest(this.tests).subscribe(result=>{ 
           
           this.isNotLengthOfQuestions=true;
           this.tests.questions.length=0;
           this.isSuccess=true;
           this.maxQuesLengthReachedMsg="";
           this.successMessage=result;

    },(error)=>{
        this.isError=true;
        this.errorMessage=error;
    });  
  }
  removeQuestionFromList(questionNumber:number){
      this.tests.questions.splice(questionNumber,1);
  }
   ngOnInit(){
       if(!this.userService.isLoggedIn()){
            this.router.navigate(['/quizStart']);
       }
           
   }
}