import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { PersonService } from './person.service';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
// import { LoginModule } from './login/login.module';
import { AuthGuard } from './login/auth-guard.service';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ToastrModule.forRoot(),
    FormsModule
    // LoginModule
  ],
  providers: [ PersonService, AuthGuard, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
