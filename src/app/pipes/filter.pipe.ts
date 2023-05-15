import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/user';
import { DEACTIVATE } from 'src/config';
@Pipe({
  name: 'filterUser'
})
export class FilterPipe implements PipeTransform {

  transform(value: User[],filterText:string) {
    
    return value.filter((user)=>{
      return filterText === DEACTIVATE? !user.isDeleted:user.isDeleted;
    });
    
  }

}
