import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { PagesComponent } from './components/pages/pages.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { SendEmailComponent } from './components/auth/send/sendEmail.component';
import { ResetComponent } from './components/auth/reset/reset.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'send', component: SendEmailComponent },
  { path: 'reset/:token', component: ResetComponent },
  { path: 'bienvenido', component: PagesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
