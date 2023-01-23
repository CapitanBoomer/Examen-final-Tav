
export interface Usuarios {
  username:string,
  password:string,
}
export interface Datoscompletos{
  id: number,
  username: string,
  password: string,
  conductor: boolean,
  carrera: string,
  sede : string,
  firstName: string,
  lastName: string,
  email:string
}

export interface ObtCon{
  username : string,
  email : string
}


export interface Carrera extends Datoscompletos{
  nombreCarrera : string
}
