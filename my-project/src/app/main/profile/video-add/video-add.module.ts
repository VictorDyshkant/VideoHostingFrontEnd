import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VideoAddComponent } from './video-add.component';
import { MaterialModule } from 'src/app/material';

const router: Routes = [
    {
      path: '',
      component: VideoAddComponent
    }
];

@NgModule({
    declarations:[VideoAddComponent],
    imports:[
        RouterModule.forChild(router),
        CommonModule,MaterialModule
    ]
})
export class VideoAddModule{}