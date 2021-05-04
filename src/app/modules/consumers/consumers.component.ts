import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from 'src/app/app-store/consumer/consumer.model';
import { ConsumerService } from 'src/app/app-store/consumer/consumer.service';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss']
})
export class ConsumersComponent implements OnInit {
  loading$: Observable<boolean>;
  consumers$: Observable<Consumer[]>;

  constructor(private consumerService: ConsumerService) {
    this.consumers$ = consumerService.entities$;
    this.loading$ = consumerService.loading$;
  }

  ngOnInit() {

    // this.consumers$.subscribe(c => console.log(c))
    this.getWithQuery(10,10);
  }

  addOne(consumer: Consumer) {
    this.consumerService.add(consumer);
  }

  deleteOne(consumer: Consumer) {
    this.consumerService.delete(consumer._id);
  }

  getAll() {
    this.consumerService.getAll();
  }
  getWithQuery(limit: number, skip:number){
    this.consumerService.getWithQuery(`limit=${limit}&skip=${skip}`)
  }

  updateOne(consumer: Consumer) {
    this.consumerService.update(consumer);
  }
}
