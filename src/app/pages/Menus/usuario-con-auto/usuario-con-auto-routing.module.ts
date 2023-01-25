import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioConAutoPage } from './usuario-con-auto.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioConAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioConAutoPageRoutingModule {}
