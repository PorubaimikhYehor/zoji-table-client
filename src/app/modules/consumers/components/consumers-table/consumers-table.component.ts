import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { State } from 'src/app/app-store';
import { Consumer } from 'src/app/app-store/consumer/consumer.model';
import { Pagination } from 'src/app/app-store/models';

@Component({
  selector: 'app-consumers-table',
  templateUrl: './consumers-table.component.html',
  styleUrls: ['./consumers-table.component.scss']
})
export class ConsumersTableComponent {
  @Input() consumers$: Observable<Consumer[]> = of([]);
  @Input() pagination: Pagination = {};
  @Output() pageEvent = new EventEmitter();

  displayedColumns: string[] = ['code', 'name'];

  length: number = 0;
  pageSize = 50;
  showFirstLastButtons = true;
  pageSizeOptions = [5, 10, 25, 50, 100, 250]
  pageIndex = 0

  constructor(
    private store: Store<State>,
  ) { }

  ngOnChanges(): void {
    this.setPagination(this.pagination);
  }
  setPagination(opt: Pagination) {
    this.length = +opt.count || 0;
    // this.pageSize = +opt.limit || 50;
    // this.showFirstLastButtons = true;
    // this.pageIndex = +opt.skip / +opt.limit + 1;
  }


  // pageEvent: PageEvent | undefined;

}
