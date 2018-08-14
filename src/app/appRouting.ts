import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AuthGuard } from './authentication/auth.guard';
import { AddEditRemoveComponent } from './dashboard/add-edit-remove/add-edit-remove.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'addEditDelete', component: AddEditRemoveComponent },
    { path: '**', redirectTo: '/' }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
