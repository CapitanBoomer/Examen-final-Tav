import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResContraService {

  public URL_RES: string = 'http://localhost:3000/usuarios';
  public email : string = '';
  constructor(
    public http: HttpClient
  ) { }

  public resetPassword(email: string) {
    return this.http.post(this.URL_RES, { email: email });
  }
}
