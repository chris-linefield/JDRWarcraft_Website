import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProfilComponent } from './components/pages/profil/profil.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { VerifyEmailComponent } from './components/pages/verify-email/verify-email.component';
// route guard
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full'},
  { path: 'accueil', component: HomeComponent},
  { path: 'connexion', component: LoginComponent},
  { path: 'inscription', component: RegisterComponent},
  { path: 'profil', component:ProfilComponent, canActivate: [AuthGuard]},
  { path: 'mot-de-passe-oublie', component:ForgotPasswordComponent},
  { path: 'verification-adresse-mail', component:VerifyEmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
