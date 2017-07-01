import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../services/users.service';
import { Users } from './../model/users.model';
import { QuestionService } from './../services/question.service';
import { ReadingMaterial } from './../model/readingMaterial.model';
import { ReadingMaterialService } from './../services/readingMaterial.service';


@Component({
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']

})
export class DashboardComponent implements OnInit {
   
    public chartOptions: any = {
        responsive: true
    };
    public chartType: string = 'line';
    public chartLegend: boolean = true;
    public chartData: any[] = [];
    public chartLabels: Array<any> = [];
    public chartColors: Array<any> = [
        { // grey   
            backgroundColor: '#ffccff',
            borderColor: '#dc143c',
            pointBackgroundColor: '#990099',
            pointBorderColor: '#990099',
            pointHoverBackgroundColor: '#990099',
            pointHoverBorderColor: '#990099',

        }];
    userDetails = new Users();
    listOfTestsTaken: [{
        testId: string;
        testScore: number;
        testName: string;
        domainName: string;
        answers: [{
            correctIndex: number;
            selectedIndex: number;
            questionId: string
        }]
    }];
    labels: string[] = [];
    data: any[] = [];

    totalItems: number;
    currentPage: number;
    itemsPerPage: number = 6;
    labelsVal: string[] = [];

    highScore: number;
    avgScore: number;
    totalTests: number;
    testsTaken: number;

    listOfReadingMaterials: ReadingMaterial[] = [];
    listOfWebAppLinks: ReadingMaterial[] = [];
    listOfRandomStuff: ReadingMaterial[] = [];
    listOfDesktopApp: ReadingMaterial[] = [];
    listOfPlcLinks: ReadingMaterial[] = [];
    listOfEmbeddedLinks: ReadingMaterial[] = [];
    listOfInfoMissiles: ReadingMaterial[] = [];



    constructor(private router: Router,
        private userSerive: UserService,
        private questionService: QuestionService,
        private readingMaterialService: ReadingMaterialService) {
            
    }
    // events
    public chartClicked(e: any): void {
    }

    public chartHovered(e: any): void {
    }
    public pageChanged(event: any) {
        if (this.data.length > 0) {
            this.loadTheCurrentPage(event.page);
        }
    }

    loadTheCurrentPage(currentPage: number, ) {
        this.totalItems = this.data.length;
        this.currentPage = currentPage;
        let startIndex = (this.currentPage - 1) * this.itemsPerPage;
        let endIndex = Math.min(startIndex + this.itemsPerPage - 1, this.totalItems - 1);
        this.chartData = this.data.slice(startIndex, endIndex);
        this.chartLabels.length = 0;
        this.labels = this.labelsVal.slice(startIndex, endIndex);
        this.labels.forEach((item) => {
            this.chartLabels.push(item);
        });
    }

    getAllScores() {
        this.testsTaken = this.data.length;
        let total = this.data.reduce((acc, item) => {
            return acc + item;
        });
        this.avgScore = total / this.testsTaken;
        let arrayOfNumbers: number[] = this.data;
        this.highScore = Math.max.apply(null, arrayOfNumbers);
        this.questionService.getTests().subscribe((res) => {
            this.totalTests = res.length;
        });
    }

    getReadingMaterialFromTheDb() {
        this.readingMaterialService.getListsOfReadingMaterials().subscribe((res) => {
            this.listOfReadingMaterials = res;
            this.listOfReadingMaterials.filter((item) => {
                if (item.domainName == 'Web') {
                    this.listOfWebAppLinks.push(item);
                }
                else if (item.domainName == 'Desktop') {
                    this.listOfDesktopApp.push(item);
                }
                else if (item.domainName == 'PLC') {
                    this.listOfPlcLinks.push(item);
                }
                else if (item.domainName == 'Embedded') {
                    this.listOfEmbeddedLinks.push(item);
                }
                else if (item.domainName == 'InfoMissiles') {
                    this.listOfInfoMissiles.push(item);
                }
                else if (item.domainName == 'Random') {
                    this.listOfRandomStuff.push(item);
                }
            });
            console.log(this.listOfRandomStuff);
        });
    }
    ngOnInit() {
        
        // get user details of the test.
        this.userSerive.getUserTestsList().subscribe((results) => {
            this.userDetails = results;
            this.listOfTestsTaken = this.userDetails.testsTaken;
            this.listOfTestsTaken.forEach((item) => {
                this.data.push(item.testScore);
                this.labelsVal.push(item.testName);
            });
            if (this.data.length > 0) {
                this.loadTheCurrentPage(1);
                this.getAllScores();
            }
            this.getReadingMaterialFromTheDb();
        });

    }

}