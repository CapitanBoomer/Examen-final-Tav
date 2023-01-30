import { Injectable } from '@angular/core';
import { Datoscompletos } from '../../interfaces/usarios/usuarios';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private urlauth: string = 'https://basedatosexamen.up.railway.app/usuarios'
  public registro: Datoscompletos | null = null

  constructor(private http: HttpClient,
     private ruta: Router,
     private mensaje: AlertController
     ) { }

  public agregarUsuario(nuevoUsuario : Datoscompletos){
    return this.http.post<Datoscompletos>(this.urlauth, {...nuevoUsuario},{
      headers :{
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).subscribe(datos =>{
      if(datos){
        this.registro = datos;
        this.ruta.navigate(['/'])
      }
    })

  }

}
