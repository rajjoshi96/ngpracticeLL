import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBrew'
})
export class SearchBrewPipe implements PipeTransform {

  transform(pipeData:any,pipeModifier:any): any {
    return pipeData.filter((eachItem: { [x: string]: string; }) =>{
      return(
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['state'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }

}
