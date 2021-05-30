import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentService } from 'src/app/app-store/department/department.service';
import { Department } from 'src/app/app-store/models';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  loading$: Observable<boolean>;
  entities$: Observable<Department[]>;

  constructor(private entityService: DepartmentService) {
    this.entities$ = entityService.entities$;
    this.loading$ = entityService.loading$;
   }

  ngOnInit(): void {
    this.entities$.subscribe(d => console.log(d))
    this.getAll();
  }

  addOne(item: Department) {
    this.entityService.add(item);
  }

  deleteOne(item: Department) {
    this.entityService.delete(item._id);
  }

  getAll() {
    this.entityService.getAll();
  }

  updateOne(item: Department) {
    this.entityService.update(item);
  }
}
