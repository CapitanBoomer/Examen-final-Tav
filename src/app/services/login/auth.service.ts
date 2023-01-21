import { Injectable } from '@angular/core';
import { Usuarios, datoscompletos } from '../../interfaces/usarios/usuarios';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlauth: string = 'http://localhost:3000/usuarios'
  public datosauth: datoscompletos | null = null
  constructor(private http: HttpClient, private ruta: Router) { }

  public validadorauth({ username, password }: Usuarios) {
    this.http.post<datoscompletos>(this.urlauth, { username, password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(datos => { if (datos) { this.datosauth = datos, this.ruta.navigate(['/inicio']) } })
  }
}
