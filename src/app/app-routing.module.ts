import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronologieComponent } from './components/pages/chronologie/chronologie.component';
import { ChamanComponent } from './components/pages/classes/chaman/chaman.component';
import { ClassesComponent } from './components/pages/classes/classes.component';
import { DruideComponent } from './components/pages/classes/druide/druide.component';
import { GuerrierComponent } from './components/pages/classes/guerrier/guerrier.component';
import { MageComponent } from './components/pages/classes/mage/mage.component';
import { PaladinComponent } from './components/pages/classes/paladin/paladin.component';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProfilComponent } from './components/pages/profil/profil.component';
import { DraeneiComponent } from './components/pages/races/draenei/draenei.component';
import { ElfenuitComponent } from './components/pages/races/elfenuit/elfenuit.component';
import { ElfesangComponent } from './components/pages/races/elfesang/elfesang.component';
import { GnomeComponent } from './components/pages/races/gnome/gnome.component';
import { HumainComponent } from './components/pages/races/humain/humain.component';
import { NainComponent } from './components/pages/races/nain/nain.component';
import { OrcComponent } from './components/pages/races/orc/orc.component';
import { RacesComponent } from './components/pages/races/races.component';
import { ReprouveComponent } from './components/pages/races/reprouve/reprouve.component';
import { TaurenComponent } from './components/pages/races/tauren/tauren.component';
import { TrollComponent } from './components/pages/races/troll/troll.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { RulesComponent } from './components/pages/rules/rules.component';
import { SortsComponent } from './components/pages/sorts/sorts.component';
import { VerifyEmailComponent } from './components/pages/verify-email/verify-email.component';
// route guard
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full'},
  { path: 'accueil', component: HomeComponent},
  { path: 'regles', component: RulesComponent},
  { path: 'races', component: RacesComponent},
  { path: 'races/draenei', component: DraeneiComponent},
  { path: 'races/elfenuit', component: ElfenuitComponent},
  { path: 'races/gnome', component: GnomeComponent},
  { path: 'races/humain', component: HumainComponent},
  { path: 'races/nain', component: NainComponent},
  { path: 'races/elfesang', component: ElfesangComponent},
  { path: 'races/orc', component: OrcComponent},
  { path: 'races/reprouve', component: ReprouveComponent},
  { path: 'races/tauren', component: TaurenComponent},
  { path: 'races/troll', component: TrollComponent},
  { path: 'classes', component: ClassesComponent},
  { path: 'classes/chaman', component: ChamanComponent},
  { path: 'classes/paladin', component: PaladinComponent},
  { path: 'classes/guerrier', component: GuerrierComponent},
  { path: 'classes/druide', component: DruideComponent},
  { path: 'classes/mage', component: MageComponent},
  { path: 'sorts', component: SortsComponent},
  { path: 'chronologie', component: ChronologieComponent},
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
