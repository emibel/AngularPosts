// @ts-check

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { CommentsListComponent } from './comments/list/comments-list.component';
import { PostListComponent } from './list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { UiModule } from '../UI/ui.module';
import { PostService } from './post.service';
import { CommentsService } from './comments/comments.service';
import { PostCounterComponent } from './post-counter/post-counter.component';

export const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: ':postId/comments', component: CommentsListComponent},
];

@NgModule({
  declarations: [
    CommentsListComponent,
    PostListComponent,
    PostListItemComponent,
    PostCounterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UiModule,
  ],
  providers: [
    PostService,
    CommentsService,
  ]
})
export class PostModule {
}
