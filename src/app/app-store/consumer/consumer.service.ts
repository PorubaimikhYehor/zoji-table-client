import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { consumers, consumersPagination, State } from '../index';
import { Observable } from 'rxjs';
import { Consumer } from './consumer.model';
import { Pagination } from '../models/pagination.model';


@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  entities$: Observable<Consumer[]> = this.store.select(consumers);
  pagination$: Observable<Pagination> = this.store.select(consumersPagination);

  constructor(
    private store: Store<State>,
  ) { }

}
