import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsumersModule } from './modules/consumers/consumers.module';
import { AppStoreModule } from './app-store/app-store.module';
import { UsersModule } from './modules/users/users.module';
import { DepartmentsModule } from './modules/departments/departments.module';
import { RegionsModule } from './modules/regions/regions.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ConsumersModule,
    AppStoreModule,
    UsersModule,
    DepartmentsModule,
    RegionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
