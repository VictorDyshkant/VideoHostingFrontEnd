import { NgModule } from '@angular/core';
import { WatchComponent } from './watch.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material';
import { RouterModule, Routes } from '@angular/router';


const router:Routes = [
    {path:'',component : WatchComponent} 
]

@NgModule({
    declarations:[WatchComponent],
    imports:[
        CommonModule,MaterialModule,
        RouterModule.forChild(router),
    ]
})
export class WatchModule{}