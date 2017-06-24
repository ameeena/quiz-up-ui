import {Injectable} from "@angular/core";
import {Http,Headers,RequestOptions,Response} from "@angular/http";
import{Quiz} from '../Model/questions.model';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class QuestionService{
    // private addQuestionUrl='http://localhost:4000/api/addQuestions';
    private getTestsUrl='http://localhost:4000/api/getTestsList';
    private addTestUrl='http://localhost:4000/api/addTest';
    private getTestBasedOnIdUrl='http://localhost:4000/api/getTestsBasedOnId';
    private deleteTestsBasedOnIdUrl='http://localhost:4000/api/deleteTestBasedOnId';

    constructor(private http:Http){
        console.log('QuestionService service initiated');
    }
    
    getTests(){       
        return this.http.get(this.getTestsUrl).map(res=>res.json()).catch(this.handleError);
    }  
  

    // addQuestions(newTest:any){        
    //     let body=JSON.stringify(newTest);
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });        
    //     return this.http.post(this.addQuestionUrl,body,options).map((res)=>{res.json();}).catch(this.handleError);
    // }  
    addTest(newTest:Quiz){
        let body=JSON.stringify(newTest);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });        
        return this.http.post(this.addTestUrl,body,options).map(res=>this.getMessages(res)).catch(this.handleError);
    }
    getTestBasedOnId(idValue:any){
        // let body=id;
        let idVal={
            _id:idValue
        }

        let body=JSON.stringify(idVal);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });  
        return this.http.post(this.getTestBasedOnIdUrl,body,options).map(res=>res.json()).catch(this.handleError);      
        // return this.http.get(this.getTestBasedOnIdUrl).map(res=>res.json()).catch(this.handleError);
    }

    deleteTestBasedOnId(testId:string){
        let idVal={
            _id:testId
        }

        let body=JSON.stringify(idVal);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });  
        return this.http.post(this.deleteTestsBasedOnIdUrl,body,options).map((res)=>this.getMessages(res)).catch(this.handleError);      

    }
    private handleError(error: Response) {
		return Observable.throw(error.json().message || 'Server error');
	}

    private getMessages(messageObject:Response){
        return messageObject.json().message;
    }
}