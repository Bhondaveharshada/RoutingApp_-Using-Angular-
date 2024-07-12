import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule,TodoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   h_array= [] 

  display(){
    
    
  }
  editTask(){

  }
  deleteTask(){

  }
  cancelEdit(){

  }
}

