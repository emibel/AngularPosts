import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angular-6-social-login';
import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in.component';
import { BrowserModule } from '@angular/platform-browser';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('824021427936078')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('104992594558-mjv43fge4m0457pf3dqdc8teqau2bt81.apps.googleusercontent.com')
      }
    ]
  );

  return config;
}

@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
  ],
  exports: [
    SignInComponent
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
})

export class SignInModule { }
