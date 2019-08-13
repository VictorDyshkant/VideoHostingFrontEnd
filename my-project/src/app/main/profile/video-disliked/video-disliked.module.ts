import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { VideoDislikedComponent } from './video-disliked.component';
import { CommonModule } from '@angular/common';

const router: Routes = [
    {
      path: '',
      component: VideoDislikedComponent
    }
];

@NgModule({
    declarations:[VideoDislikedComponent],
    imports:[
        RouterModule.forChild(router),
        CommonModule
    ]
})
export class VideoDislikedModule{}