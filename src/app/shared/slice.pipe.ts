import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: any, number:number): unknown {
    return value.slice(0,number) + " ...";
  }

}
