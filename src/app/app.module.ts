import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpInterceptorComponent } from './http-interceptor/http-interceptor.component';
import { AngularInterceptorInterceptor } from './angular_interceptor/angular-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HttpInterceptorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
 providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AngularInterceptorInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
