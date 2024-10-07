import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
   private apiURL = `${environment.api}/user/register`
  constructor(private http:HttpClient) { }

  adduser(body:any){
    return this.http.post(this.apiURL,body)
  }
}
