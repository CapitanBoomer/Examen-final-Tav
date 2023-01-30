import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrApkPage } from './qr-apk.page';

const routes: Routes = [
  {
    path: '',
    component: QrApkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrApkPageRoutingModule {}
