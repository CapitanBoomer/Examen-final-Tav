import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioViajePageRoutingModule } from './formulario-viaje-routing.module';

import { FormularioViajePage } from './formulario-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioViajePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormularioViajePage]
})
export class FormularioViajePageModule {}
