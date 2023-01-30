import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.page.html',
  styleUrls: ['./detalle-viaje.page.scss'],
})
export class DetalleViajePage implements OnInit {
  origen : string = ''
  destino : string = ''
  conductor:string = ''
  monto: string = ''
  capacidad: boolean = false
  constructor(private rutaactiva:ActivatedRoute) { }

  ngOnInit() {
  }
ionViewWillEnter(){
  this.rutaactiva.queryParams.subscribe(datos =>{
    this.origen = datos['sede']||'error',
    this.destino = datos['destino']||'error',
    this.conductor = datos['conductor']||'error',
    this.monto = datos['costo']||'error',
    this.capacidad = datos['puesto']||'error'
  })
}
}
