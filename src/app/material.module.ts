import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const material=[
MatIconModule,
MatCardModule,
MatInputModule,
MatButtonModule,
MatDialogModule,
MatSnackBarModule,
MatProgressSpinnerModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports:[
    material
  ]
})
export class MaterialModule { }
