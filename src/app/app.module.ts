import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent//,
    //ContadorComponent, //se coloca el nombre del componente, tal como esta definido en la clase
    
  ],
  imports: [
    BrowserModule,
    HeroesModule, //aqui pongo el modulo que uso, en este caso el de Heroes, ahi esta definido lo que traigo hacia acá
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
