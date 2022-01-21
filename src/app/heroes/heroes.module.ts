import { NgModule } from "@angular/core";
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ //aqui van los componentes de mi modulo, o en este caso de mi carpeta
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //lo que quiero que se vea desde fuera de mi modulo en otros lados
        ListadoComponent
    ], 
    imports: [ //AQUI van solo modulos
        CommonModule //exporta funcionalidades como el ngIf y ngFor de angular
    ]
})
export class HeroesModule{

}