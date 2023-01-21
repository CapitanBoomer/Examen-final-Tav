import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'
import {AuthService} from '../../services/login/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public formularioLog : FormGroup

  constructor(
    private builder: FormBuilder,
    private servicioauth:AuthService
  ) {
    this.formularioLog = builder.group({
      username : ['',[Validators.required, Validators.minLength(3)]],
      password : ['', [Validators.required, Validators.maxLength(20)]]
    })
  }

  public validar(){
    this.servicioauth.validadorauth({
    username:this.formularioLog.value.username,
    password:this.formularioLog.value.password
    })
  }

  ngOnInit() {
  }

}
