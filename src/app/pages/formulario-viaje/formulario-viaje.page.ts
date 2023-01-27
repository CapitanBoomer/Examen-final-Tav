import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ViajesService } from 'src/app/services/viajes/viajes.service';

@Component({
  selector: 'app-formulario-viaje',
  templateUrl: './formulario-viaje.page.html',
  styleUrls: ['./formulario-viaje.page.scss'],
})
export class FormularioViajePage implements OnInit {

  public nombre: string = '';
  public apellido: string = '';
  public Origen: string = '';
  public peso: number = 0
  public capacidad: boolean = true;

  constructor(
    private rutaactiva: ActivatedRoute,
    public viaje: ViajesService
    ) { }

  ngOnInit() {
  }

  formulario = new FormGroup({
    conductor: new FormControl(''),
    origen: new FormControl(''),
    destino: new FormControl(''),
    monto: new FormControl(0),
    capacidad: new FormControl(false)
  })

  public ingresarConductor(){
    if(this.formulario.valid){
      this.viaje.llenarViajes(
        {
          conductor: this.nombre +''+ this.apellido,
          origen: this.Origen,
          destino: this.formulario.value.destino as string,
          monto: this.formulario.value.monto as number,
          capacidad: this.formulario.value.capacidad as boolean
        }
      )
    }
  }

  ionViewWillEnter() {
    this.rutaactiva.queryParams.subscribe(datosUser => {
      this.nombre = datosUser['nombre'] || 'sin nombre',
        this.apellido = datosUser['apellido'] || 'sin apellido',
        this.Origen = datosUser['sede'] || 'sin sede'
    })
  }


}
