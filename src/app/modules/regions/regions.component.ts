import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from 'src/app/app-store/models';
import { RegionService } from 'src/app/app-store/region/region.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
  loading$: Observable<boolean>;
  entities$: Observable<Region[]>;

  constructor(private entityService: RegionService) {
    this.entities$ = entityService.entities$;
    this.loading$ = entityService.loading$;
   }

  ngOnInit(): void {
    this.entities$.subscribe(d => console.log(d))
    this.getAll();
  }

  addOne(item: Region) {
    this.entityService.add(item);
  }

  deleteOne(item: Region) {
    this.entityService.delete(item._id);
  }

  getAll() {
    this.entityService.getAll();
  }

  updateOne(item: Region) {
    this.entityService.update(item);
  }
}
