import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.page.html',
  styleUrls: ['./contrasena.page.scss'],
})
export class ContrasenaPage implements OnInit {
public pass: string = ''
  constructor(private rutaactiva:ActivatedRoute) { }

  ngOnInit() {
  }
ionViewWillEnter(){
  this.rutaactiva.queryParams.subscribe(data=>{
    this.pass = data['pass']||'contraseña no existe'
  })
}
}
