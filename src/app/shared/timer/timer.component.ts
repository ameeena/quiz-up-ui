import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  private _duration: number;
  
  @Input()
  set duration(duration: number) {
    this._duration = duration;
  }
  get duration() {
    return this._duration;
  }

  @Input() direction: string;

  @Output() timerEnd = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() {
  }

}
