import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/home/pages/login/login.component';
import { CadastroComponent } from './modules/home/pages/cadastro/cadastro.component';
import { IndexComponent } from './modules/home/pages/index/index.component';

import { AuthService } from './core/authentication/auth.service';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PerfilUsuarioComponent } from './shared/components/perfil-usuario/perfil-usuario.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { CarrosselComponent } from './shared/components/carrossel/carrossel.component';
import { MontepcComponent } from './modules/home/pages/montepc/montepc.component';
import { ProfileComponent } from './modules/home/pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    IndexComponent,
    NavbarComponent,
    PerfilUsuarioComponent,
    CarrosselComponent,
    MontepcComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarModule,
    MegaMenuModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
