import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPostList, IPost } from './post.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';

const BASE_URL = `https://jsonplaceholder.typicode.com/`;
@Injectable()
export class PostService {

  dataStore = new BehaviorSubject(<IPostList>{});

  constructor(private httpClient: HttpClient) { }

  fetchPosts(currentPage: number) {
    this.httpClient
      .get<IPost[]>(`${BASE_URL}posts?_start=${currentPage * 5}&_limit=5`, { observe: 'response' })
      .pipe(
        map( response => {
          console.log(response);
          return {
            totalCount: Number.parseInt(response.headers.get('x-total-count')),
            data: response.body
          };
        })
      )
      .subscribe(response => {
        this.dataStore.next({...response});
      });
  }
}
