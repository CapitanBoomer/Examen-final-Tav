import { Component, OnInit } from '@angular/core';
//Servicio
import {AuthService} from '../../services/login/auth.service'
import { FormControl,FormGroup,FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { type } from 'os';
@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {

  ionicFormGroup! : FormGroup

  constructor(
    private builder : FormBuilder,
    private servicio:AuthService
  ) {
    this.ionicFormGroup = this.builder.group({
      username : ['',[Validators.required, Validators.minLength(3)]],
      email : ['',[Validators.required, Validators.minLength(3),]]
    })
  }

  public validar (){
    this.servicio.ObtenerContraseña({
      username: this.ionicFormGroup.value['username'],
      email: this.ionicFormGroup.value['email']
    })
  }



  ngOnInit() {
  }

}
