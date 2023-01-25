import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-viaje',
  templateUrl: './formulario-viaje.page.html',
  styleUrls: ['./formulario-viaje.page.scss'],
})
export class FormularioViajePage implements OnInit {

  public nombre: string ='';
  public apellido: string ='';
  public Origen: string ='';
  public peso:number =0
  public capacidad :boolean =true;

  constructor(private rutaactiva:ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.rutaactiva.queryParams.subscribe(datosUser =>{
      this.nombre = datosUser['nombre']||'sin nombre',
      this.apellido = datosUser['apellido']||'sin apellido',
      this.Origen = datosUser['sede']||'sin sede'
    })
  }


  public registrarViaje(){}
}
