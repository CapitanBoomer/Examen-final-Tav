import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioConAutoPageRoutingModule } from './usuario-con-auto-routing.module';

import { UsuarioConAutoPage } from './usuario-con-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioConAutoPageRoutingModule
  ],
  declarations: [UsuarioConAutoPage]
})
export class UsuarioConAutoPageModule {}
