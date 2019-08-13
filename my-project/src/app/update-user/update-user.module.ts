import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { UpdateUserComponent } from './update-user.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';

const router : Routes=[
    {
        path : '',
        component:UpdateUserComponent
    }
]

@NgModule({
    declarations:[UpdateUserComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(router),
        MaterialModule
    ]
})

export class UpdateUserModule{}