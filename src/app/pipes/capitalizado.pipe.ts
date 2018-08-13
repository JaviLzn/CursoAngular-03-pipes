import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string): string  {

        value = value.toLowerCase();

        const palabras = value.split(' ');

        for (let i in palabras) {
            palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
        }

        return palabras.join (' ');
    }
}
