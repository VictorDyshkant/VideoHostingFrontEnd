import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material';
import { ProfileService } from './profile.service';


const itemRoutes: Routes = [
  { 
    path: 'myvideo', 
    loadChildren:()=>import('./video-my/video-my.module').then(m=>m.MyVideoModule)
  },
  { 
    path: 'likedvideo', 
    loadChildren:()=>import('./video-liked/video-liked.module').then(m=>m.VideoLikedModule)
  },
  { 
    path: 'dislikedvideo', 
    loadChildren:()=>import('./video-disliked/video-disliked.module').then(m=>m.VideoDislikedModule)
  },
  { 
    path: 'addvideo', 
    loadChildren:()=>import('./video-add/video-add.module').then(m=>m.VideoAddModule)
  },
  {
    path:'',
    redirectTo:'myvideo'
  }
];

const router: Routes = [
  {
    path: ':id',
    component: ProfileComponent,
    children: itemRoutes 
  }, 
  {
    path: '',
    component: ProfileComponent,
    children: itemRoutes 
  }
];


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    RouterModule.forChild(router),
    CommonModule,MaterialModule
  ],
  providers:[ProfileService]
})
export class ProfileModule { }
