import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { VideoMyComponent } from './video-my.component';
import { CommonModule } from '@angular/common';


const router: Routes = [
    {
      path: '',
      component: VideoMyComponent
    }
];

@NgModule({
    declarations:[VideoMyComponent],
    imports:[
        RouterModule.forChild(router),
        CommonModule
    ]
})
export class MyVideoModule{}