import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
  
})
export class PostApiComponent implements OnInit {

  constructor(private departmentservice:DepartmentService){}

  depList:any[]=[]
  
  deptObj:any ={
    
      "departmentId": 0,
      "departmentName": "",
      "departmentLogo": ""
  };
  
  http = inject(HttpClient);
  
  ngOnInit(): void {
      this.getDapartment()
  }

  onSave(){
    this.departmentservice.saveNewDept(this.deptObj).subscribe((res:any)=>{
      if(res.result){
        alert("department created successfully");
        this.getDapartment()
      }else {
        alert(res.message)
      }
      this.deptObj.departmentName = ""
      this.deptObj.departmentLogo = ""
    })
  }

 getDapartment(){
  this.departmentservice.getAllDept().subscribe((res:any)=>{
    this.depList =res.data
  })
 }

 onEdit(data:any){
  this.deptObj = data;
 }
 onUpdate(){
  this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",this.deptObj).subscribe((res:any)=>{
    if(res.result){
      alert("department update successfully");
      this.getDapartment()
    }else {
      alert(res.message)
    }
   this.deptObj.departmentId = 0;
   this.deptObj.departmentName = ""
   this.deptObj.departmentLogo = ""
  })


 }
 onDelete(id:number){
  this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" +id).subscribe((res:any)=>{
    if(res.result){
      alert("department Deleted successfully");
      this.getDapartment()
    }else {
      alert(res.message)
    }
  })
 }
 
}
