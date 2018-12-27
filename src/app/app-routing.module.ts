import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
  {
path:'',
component:HomeComponent

  },
  {
path:'dashboard',
component:DashboardComponent

  },
  {
path:'login',
component:LoginComponent

  },
  {
path:'register',
component:RegisterComponent

  },
  {
path:'userpage',
component:UserpageComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
