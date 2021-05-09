import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Consumer } from './consumer.model';
import { Pagination } from '../models/pagination.model';

export const loadConsumers = createAction('[Consumer/API] Load Consumers', props<{ query: string }>());
export const loadConsumersSuccess = createAction('[Consumer/API] Load Consumers Success', props<{ consumers: Consumer[], pagination: Pagination }>());

export const addConsumer = createAction(
  '[Consumer/API] Add Consumer',
  props<{ consumer: Consumer }>()
);

export const upsertConsumer = createAction(
  '[Consumer/API] Upsert Consumer',
  props<{ consumer: Consumer }>()
);

export const addConsumers = createAction(
  '[Consumer/API] Add Consumers',
  props<{ consumers: Consumer[] }>()
);

export const upsertConsumers = createAction(
  '[Consumer/API] Upsert Consumers',
  props<{ consumers: Consumer[] }>()
);

export const updateConsumer = createAction(
  '[Consumer/API] Update Consumer',
  props<{ consumer: Update<Consumer> }>()
);

export const updateConsumers = createAction(
  '[Consumer/API] Update Consumers',
  props<{ consumers: Update<Consumer>[] }>()
);

export const deleteConsumer = createAction(
  '[Consumer/API] Delete Consumer',
  props<{ id: string }>()
);

export const deleteConsumers = createAction(
  '[Consumer/API] Delete Consumers',
  props<{ ids: string[] }>()
);

export const clearConsumers = createAction(
  '[Consumer/API] Clear Consumers'
);
