import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UIRouterModule } from '@uirouter/angular';

import { TokenService } from './commons/services/auth/interceptors/token.service';
import { APP_STATES } from './commons/utils/app.states';

import { PublicModule } from './components/public/public.module';
import { UsersModule } from './components/users/users.module';
import { JobsModule } from './components/jobs/jobs.module';
import { AccountModule } from './components/account/account.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UIRouterModule.forRoot(APP_STATES),

    PublicModule,
    UsersModule,
    JobsModule,
    AccountModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
