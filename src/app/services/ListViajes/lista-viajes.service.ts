import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Viajes} from '../../interfaces/viajes/viajes';
@Injectable({
  providedIn: 'root'
})
export class ListaViajesService {
private urllist: string = 'https://basedatosexamen.up.railway.app/viajes';
public viajes:Viajes|null=null
private comportamientoListar = new BehaviorSubject<Array<Viajes>>([]);
public listarViajes$ = this.comportamientoListar.asObservable();
  constructor(private http:HttpClient) { }

public obtenerviajes(){
  this.http.get<Array<Viajes>>(this.urllist,{headers:{
    'Content-Type': 'application/json'
  }
}
).subscribe(datos => {
  this.comportamientoListar.next(datos);
})
}
}
