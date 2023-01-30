import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResContraService {

  public URL_RES: string = 'https://basedatosexamen.up.railway.app/usuarios';
  public email : string = '';
  constructor(
    public http: HttpClient
  ) { }

  public resetPassword(email: string) {
    return this.http.post(this.URL_RES,
       {
         email: email
      });
  }
}
