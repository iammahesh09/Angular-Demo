import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './appRouting';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AddEditRemoveComponent } from './dashboard/add-edit-remove/add-edit-remove.component';
import { MoviesComponent } from './dashboard/movies/movies.component';
import { ReactiveFormsComponent } from './Forms/reactive-forms/reactive-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    AddEditRemoveComponent,
    MoviesComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
