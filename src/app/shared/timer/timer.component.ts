import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  private _duration: number;
  private elapsedSeconds: number;

  @Input()
  set duration(value: number) {
    this.elapsedSeconds = 0;
    this._duration = value;
  }
  get duration() {
    return this._duration;
  }

  @Input() direction: string;

  @Output() timerEnd = new EventEmitter<Number>();

  constructor() {
    
    Observable.interval(1000)
      .map(() => 1)
      .subscribe((tick) => {
        this.elapsedSeconds += tick;
      });
  }

  ngOnInit() {
  }

}
