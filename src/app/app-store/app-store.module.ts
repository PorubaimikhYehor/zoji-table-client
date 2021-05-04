import { NgModule } from '@angular/core';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000/api/',
  timeout: 3000, // request timeout
}

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }]
})
export class AppStoreModule { }
