export class Users{
    userName:string;
    userPassword:string; 
    confirmPassword:string;   
    userEmail:string;
    isLoggedIn:boolean;
    teamName:string;
    testsTaken: [{
        testId: string,
        testName:string,
        domainName:string,
        answers: [{
            questionId: string,
            selectedIndex: number,
            correctIndex: number
        }],
        testScore:number
    }];
}