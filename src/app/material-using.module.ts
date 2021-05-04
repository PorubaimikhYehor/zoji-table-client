import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';


const modules = [
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  CdkTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  
]


@NgModule({
  declarations: [],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
  ]
})
export class MaterialUsingModule { }
