import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioSinAutoPage } from './usuario-sin-auto.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioSinAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioSinAutoPageRoutingModule {}
