import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'prd-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$: Observable<IUser[]> = this.usersService.dataStore.pipe(
    map( res => res.data )
  );

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.fetchUsers();
  }
}
