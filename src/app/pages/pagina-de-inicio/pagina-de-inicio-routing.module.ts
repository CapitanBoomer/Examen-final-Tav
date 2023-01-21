import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaDeInicioPage } from './pagina-de-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaDeInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaDeInicioPageRoutingModule {}
