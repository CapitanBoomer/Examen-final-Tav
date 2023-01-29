import { Component, OnInit } from '@angular/core';
import { Viajes } from 'src/app/interfaces/viajes/viajes';
import {ListaViajesService} from '../../services/ListViajes/lista-viajes.service'
@Component({
  selector: 'app-lista-viajes',
  templateUrl: './lista-viajes.page.html',
  styleUrls: ['./lista-viajes.page.scss'],
})
export class ListaViajesPage implements OnInit {
  public listaviaje : Array<Viajes> = [];
  constructor( public servicios:ListaViajesService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.servicios.obtenerviajes();
    this.servicios.listarViajes$.subscribe(datos =>{
      this.listaviaje = datos;})
  }

}
