import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthLoyoutComponent} from './shared/loyouts/auth-loyout/auth-loyout.component';
import {SiteLoyoutComponent} from './shared/loyouts/site-loyout/site-loyout.component';
import {RegisterPageComponent} from './register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLoyoutComponent,
    SiteLoyoutComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
