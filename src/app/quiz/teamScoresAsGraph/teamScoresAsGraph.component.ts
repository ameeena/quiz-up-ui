import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TeamService } from '../../core/services/teams.service';

declare let d3: any;

@Component({
  moduleId:module.id,
  templateUrl: 'teamScoresAsGraph.component.html',
  // include original styles
  styleUrls: ['../../../../node_modules/nvd3/build/nv.d3.css'],
  encapsulation: ViewEncapsulation.None
})

export class TeamScoresGraphComponent  implements OnInit {
  options;
  data;
  someVal;
  dataVal=[];
  constructor(private teamservice:TeamService){

  }
  ngOnInit() {
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'Team Name'
        },
        yAxis: {
          axisLabel: 'Team Score',
          axisLabelDistance: -10
        }
      }
    }
    //Individual team scores
    this.teamservice.getTeamScores().subscribe((teamBasedScores)=> {
       console.log(teamBasedScores);
       teamBasedScores.forEach(element => {
           const eachTeamScoreValue = {
               'label': element.teamName,
               'value': element.teamScore
           };
           this.dataVal.push(eachTeamScoreValue);
       });
       this.data = [{
           key: 'Some val',
           values: this.dataVal
       }];
    });
  }
}