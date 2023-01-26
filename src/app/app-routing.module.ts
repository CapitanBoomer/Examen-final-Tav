import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 // {
  //  path: 'home',
   // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  //},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'recuperarCon',
    loadChildren: () => import('./pages/recuperar-password/recuperar-password.module').then( m => m.RecuperarPasswordPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'menuauto',
    loadChildren: () => import('./pages/Menus/usuario-con-auto/usuario-con-auto.module').then( m => m.UsuarioConAutoPageModule)
  },
  {
    path: 'menusinauto',
    loadChildren: () => import('./pages/Menus/usuario-sin-auto/usuario-sin-auto.module').then( m => m.UsuarioSinAutoPageModule)
  },
  {
    path: 'regviaje',
    loadChildren: () => import('./pages/formulario-viaje/formulario-viaje.module').then( m => m.FormularioViajePageModule)
  },
  {
    path: 'contrasena',
    loadChildren: () => import('./pages/contrasena/contrasena.module').then( m => m.ContrasenaPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
