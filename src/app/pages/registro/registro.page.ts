import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { RegistroService } from '../../services/registro/registro.service'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  public formularioRegis: FormGroup

  constructor(private builder: FormBuilder, private servicio: RegistroService
  ) {
    this.formularioRegis = builder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      conductor: [false, [Validators.required]],
      carrera: ['', [Validators.required]],
      sede: ['', [Validators.required]],
      fotouser: ['', [Validators.required]],

    })
  }

  public validar() {
    this.servicio.validadorauth({
      username: this.formularioRegis.value.username,
      password: this.formularioRegis.value.password,
      conductor: this.formularioRegis.value.conductor,
      carrera: this.formularioRegis.value.carrera,
      sede: this.formularioRegis.value.sede,
      firstName: this.formularioRegis.value.firstName,
      lastName: this.formularioRegis.value.lastName,
      email: this.formularioRegis.value.email,
      fotouser: this.formularioRegis.value.fotouser,
    })
  }


}
