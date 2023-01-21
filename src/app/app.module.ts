import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//IMPORTACIONES CREADAS POR LOS DESARROLLORES //

import {HttpClientModule}from '@angular/common/http'
//*************************************************//

@NgModule({
  declarations: [AppComponent],
<<<<<<< HEAD
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
     HttpClientModule],
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule],
>>>>>>> 23138793178fb5af78e767665db96faeb5e385aa
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
