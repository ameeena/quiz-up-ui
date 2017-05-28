import {Component} from '@angular/core';

@Component({
    moduleId:module.id,
    templateUrl:'appStartPage.component.html',
    styleUrls:['appStartPage.component.scss']
})
export class AppStartPageComponent{
    constructor(){
        console.log("Here!!");
    }
}