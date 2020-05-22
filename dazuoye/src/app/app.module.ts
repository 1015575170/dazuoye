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



const routes: Routes = [
  { path: 'shouye', component: SzwshouyeComponent },
  { path: '', redirectTo: 'shouye',pathMatch:'full' },
  { path: 'denglu', component: SzwdengluComponent },
  {
    path: 'guanli',
    component: SzwguanliComponent,
    canActivate: [LoginGuard],
    }
  ];
  


@NgModule({
  declarations: [
    AppComponent,
    SzwdengluComponent,
    SzwshouyeComponent,
    SzwguanliComponent
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
