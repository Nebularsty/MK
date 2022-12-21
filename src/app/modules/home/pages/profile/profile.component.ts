import { FirestoreService } from './../../../../core/services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import User from 'src/app/core/models/User.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public infoUser: User[] = [];
  constructor(private auth: AuthService, private fire: FirestoreService) {}

  ngOnInit() {
    this.informacoesUsuario();
  }

  informacoesUsuario() {
    this.infoUser = this.fire.infoUser;
  }

  logout() {
    this.auth.logout();
  }
}
