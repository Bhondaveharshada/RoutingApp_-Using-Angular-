import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { ReativeformComponent } from './reativeform/reativeform.component';
import { GetApiComponent } from './get-api/get-api.component';
import { PostApiComponent } from './post-api/post-api.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [{
    path:"register", component: RegisterComponent
},
{
    path:"todo",component:TodoComponent
},
{
    path:"home",component:HomeComponent
},
{
   path:"reactiveForm", component:ReativeformComponent,canActivate:[authGuard]
},
{
    path:"getapi", component: GetApiComponent, canActivate:[authGuard]
},
{
  path:"postapi", component:PostApiComponent, canActivate:[authGuard]
},
{
  path:"login", component:LoginComponent
},
{
    path:"",redirectTo:'register' ,pathMatch:'full'
}
    
];
