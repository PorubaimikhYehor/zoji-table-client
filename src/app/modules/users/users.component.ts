import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from 'src/app/app-store/actions';
import { State, User } from 'src/app/app-store/models';
import { UserService } from 'src/app/app-store/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user: User = {
    _id: '1234',
    department: "department 1",
    email: 'test@gmail.com',
    firstName: "Yehor",
    secondName: 'Porubaimikh',
    isActive: true,
    login: 'porubaimikhy'
  }

  constructor(
    private store: Store<State>,
    // private userService: UserService

  ) { }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers({ query: '' }))
  }

}
