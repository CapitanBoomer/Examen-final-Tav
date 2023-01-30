import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Datoscompletos } from 'src/app/interfaces/usarios/usuarios';
import { RegistroService } from '../../services/registro/registro.service'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  public formularioReg!: FormGroup;



  constructor(
    private builder: FormBuilder,
    private servicio: RegistroService,
    private router: Router
  ) {
    this.formularioInicio()
  }
  public formularioInicio() {
    this.formularioReg = this.builder.group({
      username: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      conductor: new FormControl(false, [Validators.required]),
      carrera: new FormControl('', [Validators.required]),
      sede: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),

    })
  }

  ngOnInit() {
  }


  public validar() {
    this.servicio.agregarUsuario({
      correo: this.formularioReg.value.correo,
      username: this.formularioReg.value.username,
      password: this.formularioReg.value.password,
      conductor: this.formularioReg.value.conductor,
      carrera: this.formularioReg.value.carrera,
      sede: this.formularioReg.value.sede,
      firstName: this.formularioReg.value.firstName,
      lastName: this.formularioReg.value.lastName
    })

  }


}

