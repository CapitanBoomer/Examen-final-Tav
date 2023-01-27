import { Injectable } from '@angular/core';
import { Viajes } from 'src/app/interfaces/viajes/viajes';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  public VIAJES_URL = 'https://basedatosexamen.up.railway.app/viajes';
  public conviajes: Viajes | null = null;

  constructor(
    public client: HttpClient,
    public route: Router,
  ) { }

  public async llenarViajes(infoNueva: Viajes){
    this.client.post<Viajes>(this.VIAJES_URL,{...infoNueva},{
      headers:{
        'ContentType':'application/json'
      }
    })
    .subscribe((datos)=>
      {
        if(datos){
          this.conviajes = datos,
          this.route.navigate(['/menuauto'])
        }
      }
    )

  }
}
