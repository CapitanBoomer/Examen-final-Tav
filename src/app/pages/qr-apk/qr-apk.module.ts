import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrApkPageRoutingModule } from './qr-apk-routing.module';

import { QrApkPage } from './qr-apk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrApkPageRoutingModule
  ],
  declarations: [QrApkPage]
})
export class QrApkPageModule {}
