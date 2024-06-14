import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

const material=[
MatIconModule,
MatCardModule,
MatInputModule,
MatButtonModule
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
