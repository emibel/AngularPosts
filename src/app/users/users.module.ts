import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { UserInfoComponent } from './user-info/user-info.component';
import { UsersListComponent } from './list/users-list.component';
import { UiModule } from '../UI/ui.module';
import { UsersService } from './users.service';

export const routes: Routes = [
  {path: '', component: UsersListComponent},
  {path: ':userId', component: UserInfoComponent},
];

@NgModule({
  declarations: [
    UserInfoComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UiModule,
  ],
  providers: [
    UsersService,
  ]
})

export class UsersModule {}
