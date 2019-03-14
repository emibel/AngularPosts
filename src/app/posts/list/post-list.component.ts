import { Component } from '@angular/core';
import { IPostList, IPost } from '../post.interface';
import { PostService } from '../post.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'prd-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent {
  posts$: Observable<IPost[]> = this.postService.dataStore.pipe(
    map(res => res.data)
  );

  totalCount$ = this.postService.dataStore.pipe(
    map(res => res.totalCount)
  );

  constructor(private postService: PostService) {}

  public fetchData(currentPage = 0) {
    this.postService.fetchPosts(currentPage);
  }
}
