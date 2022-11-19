import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaMatcher } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminGuard } from './Core/Guards/admin.guard';
import { AuthGuard } from './Core/Guards/auth.guard';
import { AuthInterceptor } from './Core/Interceptors/auth.interceptor';
import { SpinnerInterceptor } from './Core/Interceptors/spinner.interceptor';
import { ComponentsModule } from './Core/Components/componentsModule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule
  ],
  providers: [
    AuthGuard,
    AdminGuard,
    MediaMatcher,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: 'LOCALSTORAGE', useValue: window.localStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
