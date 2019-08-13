import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoSubscriptionsComponent } from './video-subscriptions.component';
import { Routes, RouterModule } from '@angular/router';

const router : Routes =[
  {path:'',component : VideoSubscriptionsComponent}
];

@NgModule({
  declarations: [VideoSubscriptionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class VideoSubscriptionsModule { }
