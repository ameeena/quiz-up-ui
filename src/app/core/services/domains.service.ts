import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions,Response} from "@angular/http";
import{DomainModel} from '../Model/domains.model';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class DomainService{
    // private addQuestionUrl='http://localhost:4000/api/addQuestions';
    private updateDomainBasedScoreUrl='http://localhost:4000/api/updateDomainBasedScore'

    constructor(private http:Http){
        console.log('');
    }
    
   
    updateDomainBasedScores(domainName:string,pointsScored:number,testName:string){        
        let domainData ={
           testName:testName,
           domainName:domainName,
           pointsScored:pointsScored
        }
        let body=JSON.stringify(domainData);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });        
        return this.http.post(this.updateDomainBasedScoreUrl,body,options).map((res)=>this.getMessages(res)).catch(this.handleError);
    }   

    private handleError(error: Response) {
		return Observable.throw(error.json().message || 'Server error');
	}

    private getMessages(messageObject:Response){
        return messageObject.json().message;
    }
}