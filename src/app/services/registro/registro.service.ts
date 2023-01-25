import { Injectable } from '@angular/core';
import { Datoscompletos } from '../../interfaces/usarios/usuarios';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private urlauth: string = 'http://localhost:3000/usuarios'
  public datosauth: Datoscompletos | null = null
  constructor(private http: HttpClient, private ruta: Router) { }

  public validadorauth(nuevosdatos: Datoscompletos) {
    this.http.post<Datoscompletos>(this.urlauth,{...nuevosdatos},{
      headers:
      {
        'Content-Type': 'application/json'
      }
    }).subscribe(datos => {
      if(datos){
        this.datosauth = datos,
        this.ruta.navigate(['/inicio'])
      }
      })
  }
}
