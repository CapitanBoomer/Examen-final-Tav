import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RecuperarPasswordPageRoutingModule } from './recuperar-password-routing.module';
import { RecuperarPasswordPage } from './recuperar-password.page';

// desarrollladores
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RecuperarPasswordPageRoutingModule
  ],
  declarations: [RecuperarPasswordPage]
})
export class RecuperarPasswordPageModule {}
