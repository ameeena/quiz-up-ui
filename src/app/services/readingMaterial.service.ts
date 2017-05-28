import {Injectable} from "@angular/core";
import {Http,Headers,RequestOptions,Response} from "@angular/http";
import{ReadingMaterial} from '../Model/readingMaterial.model';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ReadingMaterialService{
    // private addQuestionUrl='http://localhost:4000/api/addQuestions';
    private getListsOfReadingMaterialsUrl='http://localhost:4000/api/getReadingMaterials'
    private addReadingMaterialUrl='http://localhost:4000/api/addReadingMaterials';

    constructor(private http:Http){
        console.log('Upadte Rweading data service initiated');
    }
    
    getListsOfReadingMaterials(){       
        return this.http.get(this.getListsOfReadingMaterialsUrl).map(res=>res.json()).catch(this.handleError);
    }
    
    addReadingMaterials(readingMaterialData:ReadingMaterial){
        let body=JSON.stringify(readingMaterialData);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });        
        return this.http.post(this.addReadingMaterialUrl,body,options).map((res)=>this.getMessages(res)).catch(this.handleError);
    }   
    private handleError(error: Response) {
		return Observable.throw(error.json().message || 'Server error');
	}

    private getMessages(messageObject:Response){
        return messageObject.json().message;
    }
}