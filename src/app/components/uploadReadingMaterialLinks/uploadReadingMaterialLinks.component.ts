import {Component,OnInit} from '@angular/core';
import{ReadingMaterial} from '../../Model/readingMaterial.model';
import{ReadingMaterialService} from '../../services/readingMaterial.service';
import {UserService} from '../../services/users.service';
import {Users} from '../../Model/users.model';
import {Router} from '@angular/router';

@Component({
    moduleId:module.id,
    templateUrl:'uploadReadingMaterialLinks.component.html',
    styleUrls:['uploadReadingMaterialLinks.component.scss']
})

export class UploadReadingMaterialComponent implements OnInit{
     listOfDomains:string []=["Web", "Desktop", "PLC", "Embedded", "InfoMissiles" , "Random"];
     readingMaterialData:any={};
     isError:boolean=false;
     isSuccess:boolean=false;

     errorMessage:string="";
     successMessage:string="";
    //  displayName:string;
    //  link:string;
    //  domainName:string;


     constructor(private userService:UserService,
                private readingMaterialService:ReadingMaterialService,
                private router:Router){

     }

     addReadingMaterial(){         
         this.readingMaterialService.addReadingMaterials(this.readingMaterialData).subscribe((res)=>{    
             this.isSuccess=true;
             this.successMessage=res;         
         },(err)=>{
             this.isError=true;
             this.errorMessage=err
         })
     }
     ngOnInit(){
       if(!this.userService.isLoggedIn()){
            this.router.navigate(['/quizStart']);
       }
     }
}