
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
<<<<<<< HEAD
export interface ObtCon{
  username : string,
  email : string
=======

export interface Carrera extends Datoscompletos{
  nombreCarrera : string
>>>>>>> 96bd7dd17e837686fc8b42df7d2c0d7e1e8b77b5
}
