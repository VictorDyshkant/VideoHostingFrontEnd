import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { VideoLikedComponent } from './video-liked.component';
import { CommonModule } from '@angular/common';

const router: Routes = [
    {
      path: '',
      component: VideoLikedComponent
    }
];

@NgModule({
    declarations:[VideoLikedComponent],
    imports:[
        RouterModule.forChild(router),
        CommonModule
    ]
})
export class VideoLikedModule{}