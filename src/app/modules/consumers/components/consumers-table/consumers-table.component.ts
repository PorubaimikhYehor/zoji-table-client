import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Consumer } from 'src/app/app-store/consumer/consumer.model';

@Component({
  selector: 'app-consumers-table',
  templateUrl: './consumers-table.component.html',
  styleUrls: ['./consumers-table.component.scss']
})
export class ConsumersTableComponent {
  @Input() consumers$: Observable<Consumer[]> = of([]);

  displayedColumns: string[] = ['code', 'name'];
  // dataSource = this.consumers;
}
