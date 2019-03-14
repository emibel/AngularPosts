import { Injectable } from '@angular/core';

import {
  AuthService as SocialAuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { IAuth } from './auth.interface';

@Injectable()
export class AuthService {

  constructor(private socialAuthService: SocialAuthService) {}

  public async socialSignIn(socialPlatform: string) {
    let socialPlatformProvider: string;

    if  (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    const userData = await this.socialAuthService.signIn(socialPlatformProvider);
    this.setUser(userData);
    return this.getUser();
  }

  // public socialssSignIn(socialPlatform: string) {
  //   let socialPlatformProvider: string;
  //   if  (socialPlatform === 'facebook') {
  //     socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  //   } else if (socialPlatform === 'google') {
  //     socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  //   }
  //   return this.socialAuthService.signIn(socialPlatformProvider).then(
  //     userData => {
  //       this.setUser(userData);
  //       return this.getUser();
  //     }
  //   );
  // }

  // There is an issue with facebook sign out so I can not wait for the signout promise.resolve
  public logout(): IAuth {
    this.socialAuthService.signOut();
    localStorage.removeItem('auth');
    return this.getUser();
  }

  public setUser(userData: IAuth) {
    localStorage.setItem('auth', JSON.stringify(userData));
  }

  public getUser(): IAuth {
    return JSON.parse(localStorage.getItem('auth'));
  }
}
