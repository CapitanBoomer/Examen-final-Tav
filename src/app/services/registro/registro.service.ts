import { Injectable } from '@angular/core';
import { Datoscompletos } from '../../interfaces/usarios/usuarios';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private urlauth: string = 'https://basedatosexamen.up.railway.app/usuarios'
  public datosauth: Datoscompletos | null = null
  constructor(private http: HttpClient, private ruta: Router) { }

  public agregarUsuario(nuevoUsuario : Datoscompletos): Observable<any>{
    return this.http.post(this.urlauth, nuevoUsuario,{
      headers :{
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }

}
