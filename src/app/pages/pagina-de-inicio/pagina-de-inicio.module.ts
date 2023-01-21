import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaDeInicioPageRoutingModule } from './pagina-de-inicio-routing.module';

import { PaginaDeInicioPage } from './pagina-de-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaDeInicioPageRoutingModule
  ],
  declarations: [PaginaDeInicioPage]
})
export class PaginaDeInicioPageModule {}
