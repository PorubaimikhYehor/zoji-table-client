import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { consumersState } from 'src/app/app-store';
import { ConsumerActions } from 'src/app/app-store/actions';
import { Consumer } from 'src/app/app-store/consumer/consumer.model';
import { State } from 'src/app/app-store/consumer/consumer.reducer';
import { ConsumerService } from 'src/app/app-store/consumer/consumer.service';
import { Pagination } from 'src/app/app-store/models';
// import { ConsumerService } from 'src/app/app-store/consumer/consumer.service';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss']
})
export class ConsumersComponent implements OnInit {
  // loading$: Observable<boolean>;
  consumers$: Observable<Consumer[]>;
  pagination: Pagination = <Pagination>{};

  constructor(
    private store: Store<State>,
    private consumerService: ConsumerService
  ) {
    this.consumers$ = consumerService.entities$;
    // this.loading$ = consumerService.loading$;
  }

  ngOnInit() {
    this.consumerService.pagination$.subscribe(data => this.pagination = data);
    this.consumerService.pagination$.pipe(take(1)).subscribe(data => this.getWithQuery(data));
    // this.getWithQuery(10, 10);
  }
  pageEvent(e: PageEvent) {
    console.log(e);
    const opt: Pagination = {
      limit: e.pageSize,
      skip: e.pageSize * e.pageIndex,
    };
    this.getWithQuery(opt)
  }

  getWithQuery(opt: Pagination) {
    console.log(opt);    
    let query = "?";
    Object.keys(opt).forEach(key => {
      if (!opt[key]) return;
      if (query != "?") query += '&';
      query += `${key}=${opt[key]}`;
    })
    if (query == "?") return;
    this.store.dispatch(ConsumerActions.loadConsumers({ query }));
  }
}