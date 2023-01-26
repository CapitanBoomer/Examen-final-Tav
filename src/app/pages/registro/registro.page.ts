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

  public usuario!: Datoscompletos;
  public formularioReg!: FormGroup;

  constructor(
    private builder: FormBuilder,
    private servicio:RegistroService,
    private router: Router
  ) {
    this.formularioInicio()
  }
  public formularioInicio() {
    this.formularioReg = this.builder.group({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      correo: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      conductor: new FormControl(false, [Validators.required]),
      carrera: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      sede: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      fotouser: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    })
  }

  ngOnInit() {
  }





  public validar() {
    this.servicio.validadorReg({
      correo: this.formularioReg.value.correo,
      username: this.formularioReg.value.username,
      password: this.formularioReg.value.password,
      conductor: this.formularioReg.value.conductor,
      carrera: this.formularioReg.value.carrera,
      sede: this.formularioReg.value.sede,
      firstName: this.formularioReg.value.firstName,
      lastName: this.formularioReg.value.lastName,
      fotouser: this.formularioReg.value.fotouser,
    })
  }

}

