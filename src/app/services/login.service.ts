import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = `${environment.api}/user/login`
  constructor(private http:HttpClient) { }

  loginUser(loginData:any){
    return this.http.post(this.apiURL,loginData)
  }
}
