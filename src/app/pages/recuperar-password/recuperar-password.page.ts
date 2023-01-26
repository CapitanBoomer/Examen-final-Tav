import { Component, OnInit } from '@angular/core';
//Servicio
import { ResContraService } from '../../services/resContra/res-contra.service'
import { FormControl,FormGroup,FormBuilder, Validators, EmailValidator } from '@angular/forms';
@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {

  ionicFormGroup! : FormGroup

  constructor(
    private builder : FormBuilder,
    private reset:ResContraService
  ) {
    this.ionicFormGroup = this.builder.group({
      username : ['',[Validators.required, Validators.minLength(3)]],
      email : ['',[Validators.required, Validators.minLength(3),]]
    })
  }

  ngOnInit() {
  }

}
