import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IUserList } from './interfaces/user.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {

  dataStore = new BehaviorSubject(<IUserList>{});

  constructor(private httpClient: HttpClient) {}

  fetchUsers() {
    this.httpClient
      .get<IUser[]>(`https://jsonplaceholder.typicode.com/users`, { observe: 'response' }).
      pipe(
        map( res => ({
          totalCount: Number.parseInt(res.headers.get('x-total-count')),
          data: res.body
        }))
      )
      .subscribe(res => {
        this.dataStore.next({...res});
      });
  }

  // TODO:
  // getUser(userId: number): Observable<IUser> {
  //   return this.httpClient.get<IUser>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  // }
}
