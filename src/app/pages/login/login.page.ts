import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public formularioLog : FormGroup

  constructor(
    private builder: FormBuilder
  ) {
    this.formularioLog = builder.group({
      username : ['',[Validators.required]],
      password : ['', [Validators.required]]
    })
  }

  public validar(){

  }

  ngOnInit() {
  }

}
