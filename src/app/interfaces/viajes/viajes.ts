export interface Viajes {
  idViaje ?: number
  origen : string,
  destino : string,
  conductor:string,
  monto: number,
  capacidad: number,
}

export interface listviajes {
  viaje:Array<Viajes>
}
