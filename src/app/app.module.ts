import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgPipesModule } from 'ngx-pipes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { ProfilComponent } from './components/pages/profil/profil.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/pages/verify-email/verify-email.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
// Auth service
import { AuthService } from "./shared/services/auth.service";
import { RulesComponent } from './components/pages/rules/rules.component';
import { RacesComponent } from './components/pages/races/races.component';
import { DraeneiComponent } from './components/pages/races/draenei/draenei.component';
import { ElfenuitComponent } from './components/pages/races/elfenuit/elfenuit.component';
import { ElfesangComponent } from './components/pages/races/elfesang/elfesang.component';
import { GnomeComponent } from './components/pages/races/gnome/gnome.component';
import { HumainComponent } from './components/pages/races/humain/humain.component';
import { NainComponent } from './components/pages/races/nain/nain.component';
import { OrcComponent } from './components/pages/races/orc/orc.component';
import { ReprouveComponent } from './components/pages/races/reprouve/reprouve.component';
import { TaurenComponent } from './components/pages/races/tauren/tauren.component';
import { TrollComponent } from './components/pages/races/troll/troll.component';
import { ClassesComponent } from './components/pages/classes/classes.component';
import { ChamanComponent } from './components/pages/classes/chaman/chaman.component';
import { ChasseurComponent } from './components/pages/classes/chasseur/chasseur.component';
import { ChasseurdemonComponent } from './components/pages/classes/chasseurdemon/chasseurdemon.component';
import { DkComponent } from './components/pages/classes/dk/dk.component';
import { DemonisteComponent } from './components/pages/classes/demoniste/demoniste.component';
import { DruideComponent } from './components/pages/classes/druide/druide.component';
import { GuerrierComponent } from './components/pages/classes/guerrier/guerrier.component';
import { MageComponent } from './components/pages/classes/mage/mage.component';
import { MoineComponent } from './components/pages/classes/moine/moine.component';
import { PaladinComponent } from './components/pages/classes/paladin/paladin.component';
import { PretreComponent } from './components/pages/classes/pretre/pretre.component';
import { VoleurComponent } from './components/pages/classes/voleur/voleur.component';
import { SortsComponent } from './components/pages/sorts/sorts.component';
import { ChronologieComponent } from './components/pages/chronologie/chronologie.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RulesComponent,
    RacesComponent,
    DraeneiComponent,
    ElfenuitComponent,
    ElfesangComponent,
    GnomeComponent,
    HumainComponent,
    NainComponent,
    OrcComponent,
    ReprouveComponent,
    TaurenComponent,
    TrollComponent,
    ClassesComponent,
    ChamanComponent,
    ChasseurComponent,
    ChasseurdemonComponent,
    DkComponent,
    DemonisteComponent,
    DruideComponent,
    GuerrierComponent,
    MageComponent,
    MoineComponent,
    PaladinComponent,
    PretreComponent,
    VoleurComponent,
    SortsComponent,
    ChronologieComponent
  ],
  imports: [
    BrowserModule,
    NgPipesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
