import { MontepcComponent } from './modules/home/pages/montepc/montepc.component';
import { ProfileComponent } from './modules/home/pages/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthenticationGuardGuard } from './core/guards/athentication.guard';
import { CadastroComponent } from './modules/home/pages/cadastro/cadastro.component';
import { IndexComponent } from './modules/home/pages/index/index.component';
import { LoginComponent } from './modules/home/pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'monte-o-seu', component: MontepcComponent },
  {
    path: 'index',
    component: IndexComponent,
    canActivate: [AthenticationGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
