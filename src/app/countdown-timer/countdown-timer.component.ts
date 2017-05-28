import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {

  private _duration : number;
  @Input() 
  set duration(duration : number) {
    this._duration = duration;
  }
  get duration() {
    return this._duration;
  }

  @Input() direction : string;

  @Output() timerEnd = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() {
  }

}
