import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumersComponent } from './consumers.component';
import { MaterialUsingModule } from 'src/app/material-using.module';
import { ConsumersTableComponent } from './components/consumers-table/consumers-table.component';



@NgModule({
  declarations: [
    ConsumersComponent,
    ConsumersTableComponent
  ],
  imports: [
    CommonModule,
    MaterialUsingModule,
  ]
})
export class ConsumersModule { }
