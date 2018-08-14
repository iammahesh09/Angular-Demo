import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { BikesComponent } from './bikes/bikes.component';
import { AuthGuard } from './authentication/auth.guard';

const childRoutes: Routes = [

    { path: 'welcome', component: HomeComponent },
    { path: 'bikes', component: BikesComponent },
]

const appRoutes: Routes = [
    { path: '', component: MainComponent, canActivate: [AuthGuard], children: childRoutes },
    { path: 'login', component: LoginComponent },
    //{ path: '**', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/' }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
