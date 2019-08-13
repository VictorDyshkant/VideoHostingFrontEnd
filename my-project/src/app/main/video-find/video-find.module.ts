import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoFindComponent } from './video-find.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const router : Routes =[
  {path:'',component : VideoFindComponent},
  {path:':id',component : VideoFindComponent}
];

@NgModule({
  declarations: [VideoFindComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    FormsModule
  ],
  providers: [
  ]
})
export class VideoFindModule { }
