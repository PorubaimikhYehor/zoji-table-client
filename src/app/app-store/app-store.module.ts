import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '.';
import { ConsumerEffects } from './consumer/consumer.effects';
import { UserEffects } from './user/user.effects';
import * as fromUser from './user/user.reducer';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000/api/',
  timeout: 3000, // request timeout
}


@NgModule({
  imports: [
    HttpClientModule,
    EffectsModule.forRoot([
      ConsumerEffects,
      UserEffects,
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromUser.usersFeatureKey, fromUser.reducer),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }]
})
export class AppStoreModule { }
