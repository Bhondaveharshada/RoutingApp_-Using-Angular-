import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';
import { response } from 'express';
import { RegisterService } from '../services/register.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit  {
  userRegisterForm:any= FormGroup
  
  constructor(private _fb:FormBuilder,
    private registerservice :RegisterService,
    private router :Router
  ){}
  form:any

  ngOnInit(): void {
      this.userRegisterForm = this._fb.group({
        fname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(12)]],
        lname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(12)]],
        email:['',[Validators.required,Validators.email]],
        password: ['',[Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$")]],
        isAgree :[false,[Validators.requiredTrue]],
      });


  }

 submit(){
  this.form = this.userRegisterForm.value;
  console.log(this.form);
  this.registerservice.adduser(this.form).subscribe({
    next:(response:any)=>{
      console.log(response);
      alert(response.message);
      this.router.navigate(['/login'])
    },
    error:(errorResponse)=>{
        if(errorResponse.status===409){
          alert(errorResponse.error.message);
        }else{
          console.error("Error",errorResponse);
          alert("An Error occured.plz try again")
          
        }
    }
      
  })

 }

}
