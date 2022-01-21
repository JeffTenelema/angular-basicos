import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad  : number = 45;

    obtenerNombre(): string {
        //return this.nombre + '-' + this.edad; // lo de abajo es lo mismo que esto
        return `${ this.nombre } - ${ this.edad }`;
    }

    //un get simula a una funcion pero es un getter
    //se lo llama desde el html como si fuera una variable
    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
}