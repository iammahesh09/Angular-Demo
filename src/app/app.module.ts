import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './appRouting'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main/main.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './products/product-list/product-details/product-details.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { MobileComponent } from './mobile/mobile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainMenuComponent,
    ProductListComponent,
    ContactComponent,
    LoginComponent,
    ProductDetailsComponent,
    UsersComponent,
    UserDetailsComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
