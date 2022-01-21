import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

   heroes: string[] = ['Spiderman', 'Hulk', 'Ironman'];
   heroeBorrado: string = '';

   borrarHeroe():string{
    return this.heroeBorrado = this.heroes.shift() || ''; //.shift borra el primer elemento de una lista y lo devuelve como string, si no hay elementos en la lista devuelve undefined, por eso si es undefined colocamos que devuelva un espacio en blanco
   }

}
