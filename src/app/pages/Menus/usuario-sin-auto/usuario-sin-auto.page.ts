import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-usuario-sin-auto',
  templateUrl: './usuario-sin-auto.page.html',
  styleUrls: ['./usuario-sin-auto.page.scss'],
})
export class UsuarioSinAutoPage implements OnInit {
public name: string ='';
  constructor(private rutaactiva:ActivatedRoute) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.rutaactiva.queryParams.subscribe(datosUser =>{
      this.name = datosUser['nombre']||'sin nombre'
    })
  }
}
