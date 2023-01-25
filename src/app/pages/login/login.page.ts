import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {AuthService} from '../../services/login/auth.service';
import {Datoscompletos} from '../../interfaces/usarios/usuarios'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public usurioInicio: Array<any> = [];
  public usuario!: Datoscompletos;
  public formularioLog! : FormGroup;

  constructor(
    private builder: FormBuilder,
    private servicioauth:AuthService,
    private router:Router
  ) {
    this.formularioInicio()
  }
  public formularioInicio() {
    this.formularioLog = this.builder.group({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(1000)]),

    })
  }
ionViewWillEnter(){
  this.servicioauth.listarUsers$.subscribe(datos => { this.usurioInicio = datos; console.log(datos) });
  this.servicioauth.inicioSesion()
  console.log(this.usurioInicio)
}
  public iniciarSesion() {
    this.usuario = this.usurioInicio.find(user => {
      let inicio = this.formularioLog.value.username
      return user.username=== inicio
    });
    console.log(this.formularioLog.value)
    if (this.usuario) {
      if (this.usuario.password == this.formularioLog.value.password) { if (this.usuario.conductor== true ) { this.router.navigate(['/menuauto']) }
      else { this.router.navigate(['/menusinauto']) } }
      else { }
    }

  }




  ngOnInit() {
  }

}
