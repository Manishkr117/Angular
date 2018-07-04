import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rateme'
})
export class RatemePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let output = "Product is rated";
    if(value<=3){
      output='More viewed product';
    }
    else if(value<=4)
    {
      output='Most Viewed product';
    }
    else{
      output='High Sold Product';
    }
    return output;
  }

}
