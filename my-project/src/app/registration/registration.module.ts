import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const router : Routes =[
  {path : '',component : RegistrationComponent}
];

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    FormsModule
  ],
  providers:[
    
  ]
})
export class RegistrationModule { }
