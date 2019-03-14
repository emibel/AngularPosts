import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComment, ICommentList } from './comment.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators/map';

const BASE_URL = `https://jsonplaceholder.typicode.com/`;

@Injectable()
export class CommentsService {

  dataStore = new BehaviorSubject(<ICommentList>{});

  constructor(private httpClient: HttpClient) {}

  fetchComments(postId: number, currentPage: number) {
    this.httpClient.get<IComment[]>(
      `${BASE_URL}posts/${postId}/comments?_start=${currentPage * 5}&_limit=5`, {observe: 'response'}
    ).pipe(
      map( res => ({
        totalCount: Number.parseInt(res.headers.get('x-total-count')),
        data: res.body
      }))
    ).subscribe(res => {
      this.dataStore.next({...res});
    });
  }
}
