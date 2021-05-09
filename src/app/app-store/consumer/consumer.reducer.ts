import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Consumer, Pagination } from '../models';
import * as ConsumerActions from './consumer.actions';

export const consumersFeatureKey = 'consumers';

export interface State extends EntityState<Consumer> {
  // additional entities state properties
  pagination: Pagination,

}

export const adapter: EntityAdapter<Consumer> = createEntityAdapter<Consumer>({
  selectId: (model: Consumer) => model._id

});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  pagination: { limit: 50 },
});


export const reducer = createReducer(
  initialState,
  on(ConsumerActions.loadConsumersSuccess,
    (state, { consumers, pagination }) => adapter.setAll(consumers, { ...state, pagination })
  ),
  on(ConsumerActions.addConsumer,
    (state, action) => adapter.addOne(action.consumer, state)
  ),
  on(ConsumerActions.upsertConsumer,
    (state, action) => adapter.upsertOne(action.consumer, state)
  ),
  on(ConsumerActions.addConsumers,
    (state, action) => adapter.addMany(action.consumers, state)
  ),
  on(ConsumerActions.upsertConsumers,
    (state, action) => adapter.upsertMany(action.consumers, state)
  ),
  on(ConsumerActions.updateConsumer,
    (state, action) => adapter.updateOne(action.consumer, state)
  ),
  on(ConsumerActions.updateConsumers,
    (state, action) => adapter.updateMany(action.consumers, state)
  ),
  on(ConsumerActions.deleteConsumer,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ConsumerActions.deleteConsumers,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ConsumerActions.clearConsumers,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

