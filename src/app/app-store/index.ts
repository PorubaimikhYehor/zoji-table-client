import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromConsumer from './consumer/consumer.reducer';
import * as fromUser from './user/user.reducer';


export interface State {
  [fromConsumer.consumersFeatureKey]: fromConsumer.State;
  [fromUser.usersFeatureKey]: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromConsumer.consumersFeatureKey]: fromConsumer.reducer,
  [fromUser.usersFeatureKey]: fromUser.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

//// SELECTORS

// consumers
export const consumersState = createFeatureSelector<fromConsumer.State>(fromConsumer.consumersFeatureKey);
export const consumers = createSelector(consumersState, fromConsumer.selectAll);
export const consumersPagination = createSelector(consumersState, (state) => state.pagination);
