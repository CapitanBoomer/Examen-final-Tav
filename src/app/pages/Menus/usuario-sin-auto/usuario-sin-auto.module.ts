import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioSinAutoPageRoutingModule } from './usuario-sin-auto-routing.module';

import { UsuarioSinAutoPage } from './usuario-sin-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioSinAutoPageRoutingModule
  ],
  declarations: [UsuarioSinAutoPage]
})
export class UsuarioSinAutoPageModule {}
