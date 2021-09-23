import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { RbboardComponent } from './dashboard/dlrb/rbboard/rbboard.component';
import { LoginV2Component } from './login-v2/login-v2.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RbboardComponent,
    LoginV2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'dashboard', component: DashboardComponent},
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      { path: 'rb', component: RbboardComponent },

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
