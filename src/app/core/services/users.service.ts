import {Injectable} from '@angular/core';
import {Http,Response,Headers, RequestOptions} from '@angular/http';
import {URLSearchParams, QueryEncoder} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserService{
    private loggedIn=false;
    //public user=window['user'];
    // user:any;
    username:any;
    userScore:any;
    private _signupURL='http://localhost:4000/api/signup';
    private _loginURL='http://localhost:4000/api/login';
    private _getUsersListURL='http://localhost:4000/api/getUsersList';
    private _updateUserScoreURL='http://localhost:4000/api/updateUserScore';
    private _getUserTestsListURL='http://localhost:4000/api/getUserTestsList';
    private _deleteUserBasedOnUserNameURL='http://localhost:4000/api/deleteUserBasedOnUserName';
    private _getUserTeamNameUrl='http://localhost:4000/api/getUsersTeamName';
    // private updateTeamScoreUrl='http://localhost:4000/api/updateTeamScore';
    
    constructor(private http:Http){
       this.loggedIn=!!localStorage.getItem('auth_token');
    }

    isLoggedIn() {        
        return this.loggedIn;
    }

    signin(user:any):Observable<any>{
        let body=JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });
        
        return this.http.post(this._loginURL, body, options)                       
                        .map((res)=>{
                            localStorage.setItem('auth_token',res.json().userName);
                            this.loggedIn=true;
                        })   
                        .catch(this.handleError);
                                    
    }
   
    getAllUsersList(){       
        return this.http.get(this._getUsersListURL)
        .map(res=>res.json())
        
    }
    updateUserScore(userScore:any,testId:any,answersList:any,testName:any,domainName:any){        
        let user ={
            username:localStorage.getItem('auth_token'),
            userScore:userScore,
            testId:testId,
            testName:testName,
            domainName:domainName,
            answersList:answersList
        }
        console.log("User" + user);
        let body=JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });

        return this.http.post(this._updateUserScoreURL,body,options)
            .map(res=>res.json())
            .catch(this.handleError);
        
    }

    //  addUsers(newUser:any){
    //     console.log(newUser);
    //     var headers=new Headers();
    //     headers.append('Content-Type','application/json');
    //     return this.http.post('http://localhost:4000/api/users',JSON.stringify(newUser),{headers:headers}).map(res=>res.json())
    // }
    signup(user: any): Observable<any> {    
    	let body = JSON.stringify(user);
    	let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });
        // this.user=true;
		return this.http.post(this._signupURL, body, options)
                        .map((res)=>{
                            localStorage.setItem('auth_token',res.json().userName);
                            this.loggedIn=true;
                        })   
                        .catch(this.handleError)
  	}
    getUserTestsList(){
        let user={
            username:localStorage.getItem('auth_token')
        }
        let body =JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });

        return this.http.post(this._getUserTestsListURL,body,options)
            .map(res=> res.json())
            .catch(this.handleError);
    }

    deleteUserBasedOnUserName(username:string){
        const user={
            username:username
        }

        const body=JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
    	const options = new RequestOptions({ headers: headers });

        return this.http.post(this._deleteUserBasedOnUserNameURL,body,options)
            .map((res)=>this.getMessages(res))
            .catch(this.handleError);

    }
    getUsersTeamName(){
        const user={
            username:localStorage.getItem('auth_token')
        }
        const body=JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
    	const options = new RequestOptions({ headers: headers });

        return this.http.post(this._getUserTeamNameUrl,body,options)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    // updateTeamScore(teamName:string,teamScore:number){
    //     console.log("Team details");
    //     let team ={
    //        teamName:teamName,
    //        teamScore:teamScore
    //     }
    //     let body=JSON.stringify(team);
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     return this.http.post(this.updateTeamScoreUrl,body,options).map((res)=>this.getMessages(res)).catch(this.handleError);
    // }



    logout(){
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().message || 'Server error');
	}
    private getMessages(messageObject: Response){
        return messageObject.json().message;
    }

}