import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions,Response} from "@angular/http";
// import{Teams} from '../Model/teams.model';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class TeamService{
    // private addQuestionUrl='http://localhost:4000/api/addQuestions';
    private updateTeamScoreUrl='http://localhost:4000/api/updateTeamScore';
    private getTeamScoresUrl='http://localhost:4000/api/getTeamScore';

    constructor(private http:Http){
    }
    
   
    updateTeamScore(teamName:string,teamScore:number){        
        let team ={
           teamName:teamName,
           teamScore:teamScore
        }
        let body=JSON.stringify(team);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });        
        return this.http.post(this.updateTeamScoreUrl,body,options).map((res)=>this.getMessages(res)).catch(this.handleError);
    }   
    //get list of all teams and their scores.
    getTeamScores(){
         return this.http.get(this.getTeamScoresUrl).map((res)=>res.json()).catch(this.handleError);
    }
    private handleError(error: Response) {
		return Observable.throw(error.json().message || 'Server error');
	}

    private getMessages(messageObject:Response){
        return messageObject.json().message;
    }
}