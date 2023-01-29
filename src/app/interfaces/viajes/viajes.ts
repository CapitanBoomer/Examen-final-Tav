export interface Viajes {
  idViaje ?: number
  origen : string,
  destino : string,
  conductor:string,
  monto: number,
  capacidad: boolean,
}

export interface listviajes {
  viaje:Array<Viajes>
}
