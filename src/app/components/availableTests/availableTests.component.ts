import {Component,OnInit} from '@angular/core';
import{Router} from '@angular/router';
import {UserService} from '../../services/users.service';
import{QuestionService} from '../../services/question.service';
import{Quiz} from '../../Model/questions.model';
import{Users} from '../../Model/users.model';

@Component({
moduleId:module.id,
templateUrl:'availableTests.component.html',
styleUrls:['availableTests.component.scss']
})
export class AvailableTestsComponent implements OnInit{
    listOfAllTests:Quiz[];
    testsTakenList= new Users();
    listOfQuestions:any;
    listOfAvailableTests:Quiz[];
    listOfAvailableTestsResult:Quiz[]=[];
    isNotPres:boolean=true;
    isAvailbleTests:boolean=false;
    //get list of all tests.
    //get user Details
    // check if the user has any tests taken
    //if yes then dont show that
    //check if the user array has any tests!
    constructor(private userService:UserService,
                private questionService:QuestionService,
                private router:Router){               
                    this.listOfAvailableTests=[];
                    this.listOfAllTests=[];      
                    questionService.getTests().subscribe((results)=>{
                        this.listOfAvailableTests=results; 
                        if(this.listOfAvailableTests!=null)
                        {
                            this.listOfAvailableTestsResult=this.listOfAvailableTests;
                            this.isAvailbleTests=true;
                        }            
                        else{
                            this.isAvailbleTests=false;
                        }    
                    });
                    // userService.getUserTestsList().subscribe((results)=>{
                    //     if(results!=null){
                    //         this.testsTakenList.testsTaken=results.testsTaken;  
                    //     for(var i=0;i<this.listOfAllTests.length;i++){
                    //         for(var j=0;j<this.testsTakenList.testsTaken.length;j++){
                    //             if(this.listOfAllTests[i]._id===this.testsTakenList.testsTaken[j].testId){                                        
                    //                 this.isNotPres=false;
                    //                 break;                                      
                    //             }
                    //         }                                
                    //         if(this.isNotPres==true){
                    //             this.listOfAvailableTests.push(this.listOfAllTests[i]);                                   
                    //         }
                    //         this.isNotPres=true;                                
                    //     }             
                    //     }
                                    
                    // });        
                    
                }

    takeTest(testsId){
        this.router.navigate(['/home',{outlets: {'router1':['instructionsPage',testsId] }}]);
    }
    ngOnInit(){
        console.log(this.userService.isLoggedIn());
       if(!this.userService.isLoggedIn()){
            this.router.navigate(['/quizStart']);
       }
           
   }

}