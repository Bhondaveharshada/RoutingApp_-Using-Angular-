import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  apiURL :string = "https://projectapi.gerasim.in/api/Complaint/"

  constructor(private http: HttpClient) { 

  }

  getAllDept(){
   return this.http.get(this.apiURL +"GetParentDepartment")
  }

  saveNewDept(obj:any){
   return this.http.post(`${this.apiURL}AddNewDepartment`,obj)
  }
}
