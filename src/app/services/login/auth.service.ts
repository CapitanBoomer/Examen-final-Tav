import { Injectable } from '@angular/core';
import { Datoscompletos, ObtCon } from '../../interfaces/usarios/usuarios';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private urlauth: string = 'https://basedatosexamen.up.railway.app/usuarios'
  public datosauth: Datoscompletos | null = null;
  private comportamientoListarUsuario = new BehaviorSubject<Array<any>>([]);
  public listarUsers$ = this.comportamientoListarUsuario.asObservable();
  constructor(private http: HttpClient, private ruta: Router) { }


  // inicio sesión para el validador
  public inicioSesion() {
    this.http.get<Array<Datoscompletos>>(`${this.urlauth}`)
      .subscribe(datos => { this.comportamientoListarUsuario.next(datos) })
  }



  //Esta parte la hizo el Jhoel

  public ObtenerContraseña({ username, email }: ObtCon): void {
    this.http.get<Datoscompletos>(this.urlauth)
      .subscribe(data => {
        if (data) {
          this.datosauth = data,
            this.ruta.navigate(['/contrasena'])
        }
      })
  }


}
