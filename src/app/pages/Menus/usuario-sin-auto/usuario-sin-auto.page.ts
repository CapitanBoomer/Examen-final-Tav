import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocalizacionService} from './../../../services/localizacion/localizacion.service';
import {ViewWillEnter, ViewWillLeave} from '@ionic/angular';
import {Subscription} from 'rxjs';

declare var mapboxgl : any;

@Component({
  selector: 'app-usuario-sin-auto',
  templateUrl: './usuario-sin-auto.page.html',
  styleUrls: ['./usuario-sin-auto.page.scss'],
})

export class UsuarioSinAutoPage implements OnInit, ViewWillEnter {

  public name: string ='';
  public sede: string ='';
  private subs = new Subscription();
  longitude : number = 0;
  latitude : number = 0;
  public mapa : any = null;

  constructor(
    private rutaactiva:ActivatedRoute,
    public gps : LocalizacionService
    ) { }

  ngOnInit() {
  }


  ionViewWillEnter(){
    this.rutaactiva.queryParams.subscribe(datosUser =>{
      this.name = datosUser['nombre']||'sin nombre',
      this.sede = datosUser['sede']||'sin sede'
    })

    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2d4c2F0YW5hZWwiLCJhIjoiY2xkYXZ1ajJlMG16NjN2bXBhd2FmOHpmOCJ9.84MiostjKbLN-VCopRMVRA';
    this.mapa = new mapboxgl.Map({
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/light-v11',
      // center: [-70.7079036, -33.5987422], //aqui va el orden de this.longitud , this.latitud una vez obtenidos
      center: [0,0],
      zoom: 15.5,
      pitch: 50,
      bearing: -17.6,
      container: 'map',
      antialias: true
    });

    this.mapa.on('style.load', () => {
      this.mapa.resize();





      // Insert the layer beneath any symbol layer.
      const layers = this.mapa.getStyle().layers;
      const labelLayerId = layers.find(
        (layer: any) => layer.type === 'symbol' && layer.layout['text-field']
      ).id;

      // The 'building' layer in the Mapbox Streets
      // vector tileset contains building height data
      // from OpenStreetthis.Mapa.
      this.mapa.addLayer(
        {
          'id': 'add-3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': '#aaa',

            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      );
    });
  }

  // Marker
      // var marker = new mapboxgl({
      //   draggable: true
      // })
      // .setLngLat([0,0]) //aqui va this.longitud , this.latitud
      // .addTo(this.mapa);

      // Set marker options.


  public ionViewDidEnter() {
    this.subs.add(
      this.gps.observarUbicacionv2().subscribe(pos => {
        if (this.mapa !== null){
          this.mapa.setCenter([
            pos.coords.longitude,
            pos.coords.latitude,
          ])
          // console.log(pos)
            const marker = new mapboxgl.Marker({
            color: "#FFB800",
            draggable: false
            }).setLngLat([pos.coords.longitude,pos.coords.latitude])
            .addTo(this.mapa);
        }
      })
    )
  }

  public ionViewDidLeave() {
    this.subs.unsubscribe();
    this.gps.limpiarProceso();
  }

}
