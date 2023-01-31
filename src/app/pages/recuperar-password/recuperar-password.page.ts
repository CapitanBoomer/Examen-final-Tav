import { Component, OnInit } from '@angular/core';

import { FormControl,FormGroup,FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { AuthService } from '../../services/login/auth.service';
import { Datoscompletos } from '../../interfaces/usarios/usuarios'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {
  public usurioInicio: Array<any> = [];
  public usuario!: Datoscompletos;
  public formularioLog!: FormGroup;

  constructor(
    private builder: FormBuilder,
    private servicioauth: AuthService,
    private router: Router,
    private alertController: AlertController,
  ) {
    this.formularioInicio()
  }

  ngOnInit() {
  }

  public formularioInicio() {
    this.formularioLog = this.builder.group({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      correo: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),

    })
  }
  ionViewWillEnter() {
    this.servicioauth.listarUsers$.subscribe(datos => { this.usurioInicio = datos;
      //  console.log(datos)
      });
    this.servicioauth.inicioSesion()
    // console.log(this.usurioInicio)
  }

  public async validarpass() {
    this.usuario = this.usurioInicio.find(user => {
      let inicio = this.formularioLog.value.username
      return user.username === inicio
    });
    // console.log(this.formularioLog.value)

    if (this.formularioLog.valid) {

      if (this.usuario) {
        if (this.usuario.username == this.formularioLog.value.username) {
          if (this.usuario.correo == this.formularioLog.value.correo) {
            this.router.navigate(['/pass'], {
              queryParams: {
                pass:this.usuario.password
              }

            })
          }
          else {

          }
        }

      } else {
        {
          const alert = await this.alertController.create({

            message: 'Datos incorrectos',
            buttons: ['Entendido'],
          });

          await alert.present();

        }
      }
    }
    else{
      const alert = await this.alertController.create({

        message: 'Completa los campos',
        buttons: ['Entendido'],
      });

      await alert.present();

    }
  }
}
