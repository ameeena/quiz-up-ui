export class DomainModel{
    domainName:string;
    tests: [{
        testName: String,
        totalScore: Number,
        totalUsers: Number,
        AverageScore: Number
    }]
}