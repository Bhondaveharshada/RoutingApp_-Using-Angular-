import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { pipe } from 'rxjs';


@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  userlist:any[]= [];

  constructor(private http:HttpClient){

  }

  getAllusers(){
  
    this.http.get("https://jsonplaceholder.typicode.com/todos/").subscribe((result:any)=>{
     this.userlist = result;
     console.log(this.userlist);
     

    })
  }
}
