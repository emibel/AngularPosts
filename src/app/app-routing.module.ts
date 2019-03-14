import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import {
  routes as postRoutes,
  PostModule,
} from './posts/post.module';

import {
  routes as userRoutes,
  UsersModule,
} from './users/users.module';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'users', children: userRoutes },
  { path: 'posts', children: postRoutes },
  { path: 'not_found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not_found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PostModule,
    UsersModule,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
