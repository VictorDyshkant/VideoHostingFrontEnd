import { NgModule } from "@angular/core";
import { 
    MatIconModule,MatInputModule,MatProgressBarModule,
    MatProgressSpinnerModule, MatFormFieldModule, MatSelectModule,
    MatOptionModule, MatSliderModule, MatSlideToggleModule, } from '@angular/material';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import 'hammerjs';

@NgModule({
        exports:[
            MatInputModule,MatIconModule,
            MatFileUploadModule,MatProgressBarModule,
            MatProgressSpinnerModule,ReactiveFormsModule,FormsModule,
            MatFormFieldModule,MatSelectModule,MatOptionModule,MatSliderModule,MatSlideToggleModule
            
        ],
        imports:[
            MatInputModule,MatIconModule,
            MatFileUploadModule,MatProgressBarModule,
            MatProgressSpinnerModule,ReactiveFormsModule,FormsModule,
            MatFormFieldModule,MatSelectModule,MatOptionModule,MatSliderModule,MatSlideToggleModule
        ]
})
export class MaterialModule{}