import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ConsumerActions from './consumer.actions';
import * as fromConsumer from './consumer.reducer';
import { mergeMap, filter, map, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { of } from 'rxjs';




@Injectable()
export class ConsumerEffects {


  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(ConsumerActions.loadConsumers),
    mergeMap(({ query }) => this.httpService.get(`${fromConsumer.consumersFeatureKey}/${query}`).pipe(
      map(({ consumers, pagination }) => ConsumerActions.loadConsumersSuccess({ consumers, pagination })),
    )),
  ));



  constructor(
    private actions$: Actions,
    private httpService: HttpService
  ) { }


}
