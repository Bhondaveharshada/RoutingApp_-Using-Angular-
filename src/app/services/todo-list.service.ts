import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { json } from 'stream/consumers';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
private apiURL = `${environment.api}`
constructor(private http: HttpClient) { }

getAllTask():Observable<any>{
  return this.http.get(`${this.apiURL}/tasks`,{responseType:'json'})
}

addNewTask(body:any):Observable<any>{
  return this.http.post<any>(`${this.apiURL}/tasks/addTask`,body,{responseType:'json'})
}

updateTask(body:any){
  return this.http.patch(`${this.apiURL}/tasks/updateTask/`+body.id,{taskName:body.name} )
}

deleteTask(body:any){
  return this.http.delete(`${this.apiURL}/tasks/deleteTask/`+body.id)
}

updateStatus(body:any){
 return this.http.patch(`${this.apiURL}/tasks/updateStatus/`+body.id,{isCompleted:body.complete})
}
}
