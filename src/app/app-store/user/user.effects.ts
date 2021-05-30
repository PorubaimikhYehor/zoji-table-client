import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { UserActions } from '../actions';
import * as fromUser from './user.reducer';



@Injectable()
export class UserEffects {

  loadConsumers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadUsers),
    mergeMap(({ query }) => this.httpService.get(`${fromUser.usersFeatureKey}/${query}`).pipe(
      map(({ users }) => UserActions.loadUsersSuccess({ users })),
    )),
  ));

  constructor(
    private actions$: Actions,
    private httpService: HttpService
  ) { }


}
