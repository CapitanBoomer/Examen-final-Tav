import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  public formularioRegis : FormGroup

  constructor(private builder : FormBuilder
    ) {
      this.formularioRegis = builder.group({
        username : ['',[Validators.required]],
        password : ['',[Validators.required]],
        firstName : ['',[Validators.required]],
        lastName: ['',[Validators.required]],
        gender: ['',[Validators.required]],
        carrera : ['',[Validators.required]],
        age : [0,[Validators.required, Validators.min(17), Validators.max(99)]],
        sede : ['',[Validators.required]],
        comunaOrigen : ['',[Validators.required]],
      })
     }

     public validar(){

     }


}
