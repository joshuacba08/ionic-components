import { isNgTemplate } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[],
            texto: string = '',
            columna: string = 'title',
  ): any[] {

    if (texto === '') {
      return arreglo;
    }
    if ( !arreglo ) {
      return arreglo;
    }

    texto = texto.toLowerCase();

    return arreglo.filter(
      item => item.title.toLowerCase().includes( texto )
    );
  }

}
