import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondToTime'
})
export class SecondToTimePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    var minutes = String(Math.floor(value / 60));
    minutes = minutes.length == 1 ? "0" + minutes : minutes;
    var seconds = String(value % 60);
    seconds = seconds.length == 1 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  }

}
