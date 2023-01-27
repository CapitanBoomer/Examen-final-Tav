import { Injectable } from '@angular/core';
import {Geolocation, PermissionStatus,Position} from '@capacitor/geolocation'
import { Observable, Subscriber, Subscription } from 'rxjs';
import { deprecate } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LocalizacionService {

  public permisos : boolean = false;
  public posiActual : Position | null = null;
  private idProceso : string='';
  private longitud : number  = 0;
  private latitud : number = 0;

  constructor() {
    this.comprobarPermisos();
  }

  public async comprobarPermisos(){
  const comprobarPermiso : PermissionStatus = await Geolocation.checkPermissions();
    if(
      comprobarPermiso.location === "denied" ||
      comprobarPermiso.coarseLocation === "denied")
    {
      this.permisos = false;
    }
    if(comprobarPermiso.location === "granted" && comprobarPermiso.coarseLocation === "granted"){
      this.permisos = true
    }
  }

   public async obtenerPermiso(){
    await Geolocation.requestPermissions();
    await this.comprobarPermisos()
  }

  public async obtenerUbicacion(){
    this.posiActual = await Geolocation.getCurrentPosition({
      enableHighAccuracy : true,
      maximumAge : 0
    });
  }

  public observarUbicacionv2(): Observable<Position>{
    return new Observable(observador=>{
      Geolocation.watchPosition({
        enableHighAccuracy: true,
        maximumAge: 0
      }, pos => {
        if(pos)
        observador.next(pos)
      })
    })
  }

  public async limpiarProceso(){
    Geolocation.clearWatch({
      id : this.idProceso
    })
  }

  public  obtenerLongi(){
    return this.longitud =  this.posiActual?.coords.longitude as number
  }
  public  obtenerLatitude(){
    return this.latitud=  this.posiActual?.coords.latitude as number

  }



}
