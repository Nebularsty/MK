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

//primeNG imports
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { CarrosselComponent } from './shared/components/carrossel/carrossel.component';
import { MontepcComponent } from './modules/home/pages/montepc/montepc.component';
import { ProfileComponent } from './modules/home/pages/profile/profile.component';
import { CardComponent } from './shared/components/card/card.component';
import { InputComponent } from './shared/components/input/input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './shared/components/popup/popup.component';
import { ErrorMessageComponent } from './shared/components/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    IndexComponent,
    NavbarComponent,
    CarrosselComponent,
    MontepcComponent,
    ProfileComponent,
    CardComponent,
    InputComponent,
    PopupComponent,
    ErrorMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    CardModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarModule,
    MegaMenuModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
