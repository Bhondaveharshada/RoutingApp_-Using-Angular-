import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  adduser(body:any){
    return this.http.post("http://localhost:3000/user/register",body)
  }
}
