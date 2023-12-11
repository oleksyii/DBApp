import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampParserPipe',
  standalone: true
})
export class TimestampParserPipePipe implements PipeTransform {

  transform(timestamp: string): Date {
    return new Date(timestamp);
  }

}
