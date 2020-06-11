import { Pipe, PipeTransform } from '@angular/core';
import {audit} from "./history/history.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items:audit[], arg1:string,arg2:string) {
    console.log(arg2);
    if (arg2=='client name'){
      items = items.filter(item => item.Client_Name.toUpperCase().indexOf(arg1.toUpperCase()) !== -1);


    }else if (arg2=='level'){
      items = items.filter(item => item.level.toUpperCase().indexOf(arg1.toUpperCase()) !== -1);
    }else {
      items = items.filter(item => item.title.toUpperCase().indexOf(arg1.toUpperCase()) !== -1);

    }

    return items;
  }

}
