import { Component } from '@angular/core';
import { PostService } from '../post.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'prd-post-counter',
  templateUrl: './post-counter.component.html',
  styleUrls: ['./post-counter.component.scss']
})

export class PostCounterComponent {
  postsCount$ = this.postService.dataStore.pipe(
    map(response => response.data && response.data.length)
  );

  constructor(private postService: PostService) { }
}
