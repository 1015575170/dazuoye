import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { SzwdengluComponent } from './szwdenglu/szwdenglu.component';
import { SzwshouyeComponent } from './szwshouye/szwshouye.component';
import { SzwguanliComponent } from './szwguanli/szwguanli.component';
import { LoginGuard } from './login.guard';
import { AuthService } from './auth.service';
import { SzwmanagementComponent } from './szwmanagement/szwmanagement.component';
import { SzwyonghuComponent } from './szwyonghu/szwyonghu.component';

const mgtChildrenRoutes: Routes = [
  { path: 'management', component: SzwmanagementComponent },
  { path: 'yonghu', component: SzwyonghuComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' }
];

const routes: Routes = [
  { path: 'shouye', component: SzwshouyeComponent },
  { path: '', redirectTo: 'shouye',pathMatch:'full' },
  { path: 'denglu', component: SzwdengluComponent },
  {
    path: 'guanli',
    component: SzwguanliComponent,
    children: mgtChildrenRoutes,
    canActivate: [LoginGuard],
    }
  ];
  


@NgModule({
  declarations: [
    AppComponent,
    SzwdengluComponent,
    SzwshouyeComponent,
    SzwguanliComponent,
    SzwmanagementComponent,
    SzwyonghuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
   
  ],
  providers: [LoginGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
