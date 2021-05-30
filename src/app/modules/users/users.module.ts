import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { MaterialUsingModule } from 'src/app/material-using.module';



@NgModule({
  declarations: [
    UsersComponent,
    UserCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialUsingModule
  ]
})
export class UsersModule { }
