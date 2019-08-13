import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password.component';


import { FormsModule }   from '@angular/forms';

const router : Routes =[
  { path : '' , component:ForgetPasswordComponent}
];

@NgModule({
  declarations: [ForgetPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    FormsModule,
  ],
  providers:[]
})
export class ForgetPasswordModule { }
