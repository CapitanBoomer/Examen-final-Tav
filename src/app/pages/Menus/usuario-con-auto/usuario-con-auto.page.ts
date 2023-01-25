import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-con-auto',
  templateUrl: './usuario-con-auto.page.html',
  styleUrls: ['./usuario-con-auto.page.scss'],
})
export class UsuarioConAutoPage implements OnInit {

  public nombre: string ='';
  public apellido: string ='';
  public sede: string ='';
  public carrera: string ='';

  constructor(private rutaactiva:ActivatedRoute) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.rutaactiva.queryParams.subscribe(datosUser =>{
      this.nombre = datosUser['nombre']||'sin nombre',
      this.apellido = datosUser['apellido']||'sin apellido',
      this.sede = datosUser['sede']||'sin sede'
      this.carrera = datosUser['carrera']||'sin carrera'
    })
  }

}
