import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundHours',
})
export class RoundHoursPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 1000) {
      return value.toString();
    } else if (value < 1000000) {
      return (value / 1000).toFixed(0) + 'K';
    } else if (value < 1000000000) {
      return (value / 1000000).toFixed(0) + 'M';
    } else {
      return (value / 1000000000).toFixed(0) + 'B';
    }
  }
}
