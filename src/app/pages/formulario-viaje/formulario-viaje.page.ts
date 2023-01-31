import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ViajesService } from 'src/app/services/viajes/viajes.service';
import { AlertController } from '@ionic/angular';

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
  public capacidad: number = 0;

  constructor(
    private rutaactiva: ActivatedRoute,
    public viaje: ViajesService,
    private alerta: AlertController
  ) { }

  ngOnInit() {
  }

  formulario = new FormGroup({
    conductor: new FormControl('', [Validators.required]),
    origen: new FormControl('', [Validators.required]),
    destino: new FormControl('', [Validators.required]),
    monto: new FormControl(0, [Validators.required]),
    capacidad: new FormControl(0, [Validators.required])
  })

  public async ingresarConductor() {

      this.viaje.llenarViajes(
        {
          conductor: this.nombre + ' ' + this.apellido,
          origen: this.Origen,
          destino: this.formulario.value.destino as string,
          monto: this.formulario.value.monto as number,
          capacidad: this.formulario.value.capacidad as number
        }
      )

  }

  ionViewWillEnter() {
    this.rutaactiva.queryParams.subscribe(datosUser => {
      this.nombre = datosUser['nombre'] || 'sin nombre',
        this.apellido = datosUser['apellido'] || 'sin apellido',
        this.Origen = datosUser['sede'] || 'sin sede'
    })
  }


}
