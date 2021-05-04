import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const modules = [
  MatCardModule,
  MatButtonModule,
]


@NgModule({
  declarations: [],
  imports: [
    ...modules,
    // CommonModule,    
  ],
  exports: [
    ...modules,
  ]
})
export class MaterialUsingModule { }