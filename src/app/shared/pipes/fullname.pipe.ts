import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: { firstName: string, lastName: string }, ...args: unknown[]): unknown {
    const {firstName, lastName} = value;
    return `${lastName.toUpperCase()} ${firstName}`;
  }

}
