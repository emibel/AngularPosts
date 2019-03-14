import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { IAuth } from '../auth.interface';

@Component({
  selector: 'prd-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService) { }

  loggedUser: IAuth;

  ngOnInit() {
    this.loggedUser = this.authService.getUser();
  }

  signIn(socialPlatform: string) {
    this.authService.socialSignIn(socialPlatform).then( userData => this.loggedUser = userData );
  }

  logout() {
    this.loggedUser = this.authService.logout();
  }
}
