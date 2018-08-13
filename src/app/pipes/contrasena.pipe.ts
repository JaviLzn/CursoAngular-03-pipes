import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {
    let nuevoValor = '';

    if (activar) {
        for (let i = 0; i < value.length - 1 ; i++ ) {
        nuevoValor += '*';
        }
    } else {nuevoValor = value;
    }

    return nuevoValor;
  }

}
