import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumersComponent } from './consumers.component';
import { MaterialUsingModule } from 'src/app/material-using.module';



@NgModule({
  declarations: [
    ConsumersComponent
  ],
  imports: [
    CommonModule,
    MaterialUsingModule,
  ]
})
export class ConsumersModule { }
