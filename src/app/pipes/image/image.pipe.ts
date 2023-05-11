import { Pipe, PipeTransform } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';

@Pipe({
  name: 'image',
  standalone: true
})
export class ImagePipe implements PipeTransform {

  transform(value: string,): string {
    return  `${enviroment.api}/dA/${value}`  ;
  }

}
