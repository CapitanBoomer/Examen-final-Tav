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
    path: 'pass',
    loadChildren: () => import('./pages/contrasena/contrasena.module').then( m => m.ContrasenaPageModule)
  },
  {
    path: 'info-ruta',
    loadChildren: () => import('./pages/info-ruta/info-ruta.module').then( m => m.InfoRutaPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista-viajes/lista-viajes.module').then( m => m.ListaViajesPageModule)
  },
  {
    path: 'qr-apk',
    loadChildren: () => import('./pages/qr-apk/qr-apk.module').then( m => m.QrApkPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./pages/detalle-viaje/detalle-viaje.module').then( m => m.DetalleViajePageModule)
  },








];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
