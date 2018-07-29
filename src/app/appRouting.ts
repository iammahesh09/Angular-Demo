import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { MobileComponent } from './mobile/mobile.component';


const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'products', component: ProductListComponent },
	{ path: 'users', component: UsersComponent },
	{ path: 'users/:id', component: UserDetailsComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'mobile', component: MobileComponent },
	{ path: 'login', component: LoginComponent },
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
	
})

export class AppRoutingModule { }