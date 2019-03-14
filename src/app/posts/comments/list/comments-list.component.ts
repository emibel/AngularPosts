import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IComment } from '../comment.interface';

import { CommentsService } from '../comments.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'prd-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
})

export class CommentsListComponent implements OnInit, OnDestroy {
  comments$: Observable<IComment[]> = this.commentsService.dataStore.pipe(
    map(res => res.data)
  );
  totalCount$: Observable<number> = this.commentsService.dataStore.pipe(
    map(res => res.totalCount)
  );

  postId: number;
  routeSubscription: Subscription;

  constructor(
    private commentsService: CommentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe( params => {
      this.postId = params.postId;
    });
  }

  public fetchData(currentPage: number) {
    this.commentsService.fetchComments(this.postId, currentPage);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
