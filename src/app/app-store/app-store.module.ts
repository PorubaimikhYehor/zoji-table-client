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
  ]
})
export class AppStoreModule { }
