import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { log } from 'console';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterModule,FormsModule,HomeComponent,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  taskstring:string= "";
  arr:any[]=[{}];
 // editing:boolean = false;
  //status:string ="";
  button="Edit";

  save(){
    if(this.taskstring){
      console.log(this.taskstring);
      this.arr.push({taskname:this.taskstring,status:"In progress",iseditable:false})
      //HomeComponent.h_array = this.arr;
      console.log(this.arr);
      //this.status = "In progress";

      this.taskstring = "";

      
    }else{
      console.log('taskstring is empty or undifines');
      
    }
  }
  editTask(index:number){
   //this.arr[index].iseditable = true;
   this.arr[index].iseditable =true;
   
  }
  deleteTask(index:number){

  }
  updateEdit(index:number){
    this.arr[index].iseditable =false;

  }
    
    

}
 