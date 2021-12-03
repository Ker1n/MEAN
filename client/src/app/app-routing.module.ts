import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthLoyoutComponent} from "./shared/loyouts/auth-loyout/auth-loyout.component";
import {SiteLoyoutComponent} from "./shared/loyouts/site-loyout/site-loyout.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {AuthGuard} from "./shared/classes/auth.guard";

const routes: Routes = [
  {
    path: '', component: AuthLoyoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path:'login', component: LoginPageComponent},
      {path:'register', component: RegisterPageComponent}
    ]
  },
  {
    path: '', component: SiteLoyoutComponent, canActivate: [AuthGuard], children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
