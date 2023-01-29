import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoRutaPageRoutingModule } from './info-ruta-routing.module';

import { InfoRutaPage } from './info-ruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoRutaPageRoutingModule
  ],
  declarations: [InfoRutaPage]
})
export class InfoRutaPageModule {}
