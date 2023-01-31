import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.page.html',
  styleUrls: ['./detalle-viaje.page.scss'],
})
export class DetalleViajePage implements OnInit {
  origen: string = ''
  destino: string = ''
  conductor: string = ''
  monto: string = ''
  capacidad: number = 0
  constructor(
    private rutaactiva: ActivatedRoute,
    private alert: AlertController,
    private route: Router
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.rutaactiva.queryParams.subscribe(datos => {
      this.origen = datos['sede'] || 'error',
        this.destino = datos['destino'] || 'error',
        this.conductor = datos['conductor'] || 'error',
        this.monto = datos['costo'] || 'error',
        this.capacidad = datos['puesto'] || 'error'
    })
  }

  public async pedir() {
    if (this.capacidad > 1 || this.capacidad === 1) {
      const alertaSi = await this.alert.create({
        header:'Fijando viaje a '+ this.destino,
        subHeader:'Por favor espere fuera de su sede',
        buttons:[{
          text:'Gracias',
          role:'confirm'
        }]
      })
      await alertaSi.present()
      this.route.navigate(['/menusinauto'])
    } else {
      const alertaNo = await this.alert.create({
        header:'El conductor no cuenta con capacidad',
        buttons:[{
          text:'Entendido',
          role:'confirm'
        }]
      })
      await alertaNo.present()
      this.route.navigate(['/lista'])
    }
  }
}
