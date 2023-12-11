import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampParser',
  standalone: true
})
export class TimestampParserPipe implements PipeTransform {

  transform(timestamp: string): Date {
    return new Date(timestamp);
  }

}
